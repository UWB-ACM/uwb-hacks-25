import { Prize } from "@/src/util/dataTypes";
import sql from "@/src/util/database";

/**
 * Gets every prize currently available.
 */
export async function eventCheckIn(): Promise<Prize[]> {
    const data =
        await sql`SELECT id, name, description, initial_stock, price, (SELECT Count(*) FROM transactions WHERE transactions.prize=prizes.id) AS sold FROM prizes;`;
    
    const data =
        await sql`SELECT id, name, description, initial_stock, price, (SELECT Count(*) FROM transactions WHERE transactions.prize=prizes.id) AS sold FROM prizes;`;

    return data.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        stock: row.initial_stock - row.sold,
        price: row.price,
    }));
}
