import { Transaction, TransactionType } from "@/src/util/dataTypes";
import sql from "@/src/util/database";

/**
 * Creates a new transaction in the database.
 * This operation may fail, in which case null
 * will be returned.
 *
 * For transaction types related to events/prizes, the
 * corresponding event/prize ID must be included, and cannot
 * be included for other types.
 *
 * @param user - is the ID of the user who this transaction is on.
 * @param type - is the type of the transaction.
 * @param amount - is the amount (positive or negative) that this transaction represents.
 * @param authorized_by - is the ID of the user who authorized this transaction (if they exist).
 * @param event - is the event that this transaction is associated with (if it exists).
 * @param prize - is the prize that this transaction is associated with (if it exists).
 */
export async function createTransaction(
    user: number,
    type: TransactionType,
    amount: number,
    authorized_by: number | null,
    event: number | null,
    prize: number | null,
): Promise<Transaction | null> {
    let data: Record<string, unknown>[];

    switch (type) {
        case TransactionType.Unknown: {
            if (event || prize) {
                throw new Error(
                    "Unknown transactions cannot have events/prizes!",
                );
            }

            // A user's balance must never go below zero, and this
            // needs to be enforced here.
            // To avoid issues with concurrency, we'll lock
            // the user's account record, although any row unique
            // to the user would work.
            // We don't care about the result of that lock, however, so just
            // retrieve the result of the insert query.
            data = (
                await sql.begin((sql) => [
                    sql`SELECT 1 FROM users WHERE id=${user} FOR UPDATE;`,
                    sql`INSERT INTO transactions ("user", type, amount, authorized_by) (SELECT ${user}, ${type}, ${amount}, ${authorized_by} WHERE COALESCE((SELECT balance FROM balances WHERE "user"=${user}), 0) + ${amount} >= 0) RETURNING id, time;`,
                ])
            )[1];
            break;
        }
        case TransactionType.EventAttendance: {
            if (prize) {
                throw new Error(
                    "EventAttendance transactions cannot have prizes!",
                );
            }

            if (!event) {
                throw new Error(
                    "EventAttendance transactions must have an event!",
                );
            }

            const eventName =
                await sql`SELECT name FROM events WHERE id=${event};`;
            if (eventName.length !== 1 || !eventName[0]["name"]) {
                throw new Error(
                    "EventAttendance transactions must have a valid event!",
                );
            }

            data = (
                await sql.begin((sql) => [
                    // This needs to be locked for concurrency, to prevent
                    // check-ins from occurring in parallel with event edits and having an
                    // outdated amount.
                    // We can use a shared lock here, since parallel check-ins
                    // are allowed.
                    sql`SELECT 1 FROM events WHERE id=${event} FOR SHARE;`,
                    sql`SELECT 1 FROM users WHERE id=${user} FOR UPDATE;`,
                    sql`INSERT INTO transactions ("user", type, amount, authorized_by, event) (SELECT ${user}, ${type}, ${amount}, ${authorized_by}, ${event} WHERE COALESCE((SELECT balance FROM balances WHERE "user"=${user}), 0) + ${amount} >= 0) RETURNING id, time;`,
                ])
            )[2];

            if (data.length !== 0) {
                data[0]["event_name"] = eventName[0]["name"];
            }

            break;
        }
        case TransactionType.PrizePurchase: {
            if (event) {
                throw new Error(
                    "PrizePurchase transactions cannot have events!",
                );
            }

            if (!prize) {
                throw new Error(
                    "PrizePurchase transactions must have a prize!",
                );
            }

            const prizeName =
                await sql`SELECT name FROM prizes WHERE id=${prize};`;
            if (prizeName.length !== 1 || !prizeName[0]["name"]) {
                throw new Error(
                    "PrizePurchase transactions must have a valid prize!",
                );
            }

            // To ensure that we don't give the same prize to two people,
            // this locks the prizes row before performing the write.
            data = (
                await sql.begin((sql) => [
                    sql`SELECT 1 FROM users WHERE id=${user} FOR UPDATE;`,
                    sql`SELECT 1 FROM prizes WHERE id=${prize} FOR UPDATE;`,
                    sql`INSERT INTO transactions ("user", type, amount, authorized_by, prize) (SELECT ${user}, ${type}, ${amount}, ${authorized_by}, ${prize} WHERE COALESCE((SELECT balance FROM balances WHERE "user"=${user}), 0) + ${amount} >= 0 AND (SELECT Count(*) FROM transactions WHERE transactions.prize=${prize}) < (SELECT initial_stock FROM prizes WHERE id=${prize})) RETURNING id, time;`,
                ])
            )[2];

            if (data.length !== 0) {
                data[0]["prize_name"] = prizeName[0]["name"];
            }

            break;
        }
        default: {
            throw new Error("Unhandled transaction type: " + type);
        }
    }

    if (data.length === 0) return null;
    return {
        id: data[0].id as number,
        user,
        type,
        amount,
        authorized_by,
        event,
        prize,
        eventName: data[0].event_name as string | null,
        prizeName: data[0].prize_name as string | null,
        time: data[0].time as Date,
        // We just made the transaction.
        reverted: false,
    };
}

/**
 * Gets a user's balance.
 * @param user - is the ID of the user to get the balance of.
 */
export async function getBalanceForUser(user: number): Promise<number> {
    const balance =
        await sql`SELECT balance FROM balances WHERE "user"=${user};`;

    // No balance row means 0 balance, since
    // it just means that no transactions have occurred.
    if (balance.length === 0) return 0;
    return balance[0].balance;
}

/**
 * Gets the list of transactions for a user.
 * @param user - is the user to look for transactions on.
 */
export async function getTransactionsForUser(
    user: number,
): Promise<Transaction[]> {
    const data =
        await sql`SELECT transactions.id, type, amount, authorized_by, event, prize, time, reverted, prizes.name AS prize_name, events.name AS event_name FROM transactions LEFT JOIN prizes ON prizes.id=transactions.prize LEFT JOIN events ON events.id=transactions.event WHERE "user"=${user} ORDER BY transactions.time DESC;`;

    return data.map((row) => ({
        id: row.id,
        user,
        type: row.type,
        amount: row.amount,
        authorized_by: row.authorized_by,
        event: row.event,
        prize: row.prize,
        eventName: row.event_name,
        prizeName: row.prize_name,
        time: row.time,
        reverted: row.reverted,
    }));
}

/**
 * Sets the reverted status of the given transaction.
 * @param id - is the ID of the transaction to modify.
 * @param reverted - should the transaction be reverted.
 * @returns whether the transaction was reverted.
 */
export async function setTransactionReverted(
    id: number,
    reverted: boolean,
): Promise<boolean> {
    // A user's balance must never go below zero, and this
    // needs to be enforced here.
    // To avoid issues with concurrency, we'll lock
    // the user's account record, although any row unique
    // to the user would work.
    // We don't care about the result of that lock, however, so just
    // retrieve the result of the insert query.
    const data = await sql.begin((sql) => [
        sql`SELECT 1 FROM users WHERE id=(SELECT "user" FROM transactions WHERE id=${id}) FOR UPDATE;`,
        sql`UPDATE transactions SET reverted=${reverted} WHERE id=${id} AND COALESCE((SELECT balance FROM balances WHERE "user"=transactions."user"), 0) + CASE WHEN ${reverted} THEN -transactions.amount ELSE transactions.amount END >= 0 RETURNING id;`,
    ]);

    // If it worked, we'll get the ID back.
    return data[1].length === 1;
}

/**
 * Sets the reverted status of the given transaction if the
 * issuer is the user who made the transaction.
 * @param id - is the ID of the transaction to modify.
 * @param issuerID - is the ID of the user who issued the transaction.
 * @param reverted - should the transaction be reverted.
 * @returns whether the transaction was reverted.
 */
export async function setTransactionRevertedIfIssuer(
    id: number,
    issuerID: number,
    reverted: boolean,
): Promise<boolean> {
    // A user's balance must never go below zero, and this
    // needs to be enforced here.
    // To avoid issues with concurrency, we'll lock
    // the user's account record, although any row unique
    // to the user would work.
    // We don't care about the result of that lock, however, so just
    // retrieve the result of the insert query.
    const data = await sql.begin((sql) => [
        sql`SELECT 1 FROM users WHERE id=(SELECT "user" FROM transactions WHERE id=${id}) FOR UPDATE;`,
        sql`UPDATE transactions SET reverted=${reverted} WHERE id=${id} AND authorized_by=${issuerID} AND COALESCE((SELECT balance FROM balances WHERE "user"=transactions."user"), 0) + CASE WHEN ${reverted} THEN -transactions.amount ELSE transactions.amount END >= 0 RETURNING id;`,
    ]);

    // If it worked, we'll get the ID back.
    return data[1].length === 1;
}
