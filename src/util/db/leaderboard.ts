import { LeaderboardRecord } from "@/src/util/dataTypes";
import sql from "@/src/util/database";

/**
 * Gets the top 5 largest earners.
 */
export async function getLeaderboard(): Promise<LeaderboardRecord[]> {
  const data = await sql`SELECT user, name, balance from balances 
         JOIN users ON users.id = balances.user
         ORDER BY balance DESC LIMIT 5`;

  return data.map((row) => ({
    id: row.user,
    name: row.name,
    balance: row.balance,
  }));
}
