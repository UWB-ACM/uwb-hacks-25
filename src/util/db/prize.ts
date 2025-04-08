import { Prize } from "@/src/util/dataTypes";
import sql from "@/src/util/database";

/**
 * Gets every prize currently available.
 */
export async function getPrizes(): Promise<Prize[]> {
    const data =
        await sql`SELECT id, name, description, initial_stock, price, image_name, (SELECT CAST(Count(*) as int) FROM transactions WHERE transactions.prize=prizes.id) AS sold FROM prizes;`;

    return data.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        initialStock: row.initial_stock,
        sold: row.sold,
        price: row.price,
        imageName: row.image_name,
    }));
}

/**
 * Gets prize through passed in ID
 */
export async function getPrizeById(id: number): Promise<Prize | null> {
    const data =
        await sql`SELECT id, name, description, initial_stock, price, image_name, (SELECT CAST(Count(*) as int) FROM transactions WHERE transactions.prize=prizes.id) AS sold FROM prizes WHERE id=${id}`;

    // if there's no prize with given id, return null
    if (data.length === 0) return null;

    // otherwise, return prize information
    return {
        id: data[0].id,
        name: data[0].name,
        description: data[0].description,
        initialStock: data[0].initial_stock,
        sold: data[0].sold,
        price: data[0].price,
        imageName: data[0].image_name,
    };
}

export async function createPrize(
    name: string,
    description: string,
    initialStock: number,
    price: number,
    imageName: string,
): Promise<Prize | null> {
    const data =
        await sql`INSERT into prizes ("name", "description", "initial_stock", "price", "image_name") VALUES (${name}, ${description}, ${initialStock}, ${price}, ${imageName}) RETURNING id`;

    if (data.length === 0) return null;

    return {
        id: data[0].id,
        name,
        description,
        initialStock,
        sold: 0,
        price,
        imageName,
    };
}

export async function updatePrize(
    id: number,
    name: string,
    description: string,
    initial_stock: number,
    price: number,
    imageName: string,
) {
    // update prize
    const data =
        await sql`UPDATE prizes SET name=${name}, description=${description}, initial_stock=${initial_stock}, price=${price}, image_name=${imageName} WHERE id=${id}`;

    // doing this to satisfy eslint
    console.log("updatedPrizeData:", data);

    // assume updated
    return;
}
