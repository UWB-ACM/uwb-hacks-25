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
        await sql`INSERT into prizes ("name", "description", "initial_stock", "price") VALUES (${name}, ${description}, ${initial_stock}, ${price}) RETURNING id`;

    if (data.length === 0) return null;

    return {
        id: data[0].id,
        name,
        description,
        stock: initial_stock,
        price,
    };
}

export async function updatePrize(
    name: string,
    description: string,
    initial_stock: number,
    price: number,
) {
    // save original name so we know what we're updating
    const original_name = name;

    // update prize
    const data = 
        await sql`UPDATE prizes SET name=${name} description=${description} initial_stock=${initial_stock} price=${price} WHERE name=${original_name}`;

    // assume updated
    return;
}
