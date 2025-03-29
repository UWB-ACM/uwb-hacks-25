import sql from "@/src/util/database";

/**
 * Creates a code record on the database.
 */
export async function createCode(): Promise<void | never> {
    const data =
        await sql`INSERT INTO codes (created_at, code, created_by, event_id, expires_on) VALUES (${code}, ${duration}, ${created_at})`;

    return data.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        stock: row.initial_stock - row.sold,
        price: row.price,
    }));
}
