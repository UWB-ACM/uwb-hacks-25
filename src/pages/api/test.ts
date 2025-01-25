import type { NextApiRequest, NextApiResponse } from "next";
import sql from "@/src/util/database";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "GET") {
        try {
            const data = await sql`SELECT * FROM test`;

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json(error);
        }
    }
}
