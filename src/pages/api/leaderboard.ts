import { NextApiRequest, NextApiResponse } from "next";
import sql from "@/src/util/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") return;
  
  try {

    const data = await sql`SELECT name, balance from balances 
    JOIN users ON users.id = balances.user
    ORDER BY balance DESC LIMIT 5`;

    res.status(400).json(data)
  } catch(error) {

    console.error(error);
    res.status(400).json(error);
  }
}
