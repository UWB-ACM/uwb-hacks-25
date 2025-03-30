import { Prize } from "@/src/util/dataTypes";
import sql from "@/src/util/database";

/**
 * Gets every prize currently available.
 */
export async function getPrizes(): Promise<Prize[]> {
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

export async function createPrize(
    name: string,
    description: string,
    initial_stock: number,
    price: number,
): Promise<Prize | null> {
    const data =
        await sql`INSERT into prizes ("name", "description", "initial_stock", "price") VALUES (${name}, ${description}, ${initial_stock}, ${price}) RETURNING *`;

    if (data.length === 0) return null;

    return {
        id: data[0].id,
        name,
        description,
        stock: data[0].initial_stock,
        price,
    };
}
