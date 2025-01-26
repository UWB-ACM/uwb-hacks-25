import { User } from "@/src/util/dataTypes";
import sql from "@/src/util/database";

/**
 * Gets the top 5 largest earners.
 */
export async function getLeaderboard(): Promise<User[]> {
    const data = await sql`SELECT name, balance from balances 
         JOIN users ON users.id = balances.user
         ORDER BY balance DESC LIMIT 5`;

    return data.map((row) => ({
        id: row.id,
        googleId: row.googleId,
        name: row.name,
        email: row.email,
        picture: row.picture,
        balance: row.balance
    }));
}
