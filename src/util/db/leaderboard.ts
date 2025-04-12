import { LeaderboardRecord } from "@/src/util/dataTypes";
import sql from "@/src/util/database";

/**
 * Gets the top 5 largest earners.
 */
export async function getLeaderboard(): Promise<LeaderboardRecord[]> {
    const data =
        await sql`WITH amounts AS (SELECT "user", SUM(amount) AS amount FROM transactions WHERE amount >= 0 GROUP BY "user") SELECT users.name, users.picture, amounts.amount FROM amounts INNER JOIN users ON users.id=amounts."user" AND users.leaderboard_consent=TRUE ORDER BY amounts.amount DESC LIMIT 5;`;

    return data.map((row) => ({
        id: row.user,
        name: row.name,
        balance: row.amount,
        picture: row.picture,
    }));
}
