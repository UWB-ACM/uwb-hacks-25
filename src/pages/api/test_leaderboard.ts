import type { NextApiRequest, NextApiResponse } from 'next';
import sql from '@/src/util/database';

// src/pages/api/test_leaderboard.ts
//
// Summary:
// Retrieves the top 10 user IDs based on the sum of their transaction amounts from the 'transactions' table.
//
// Parameters:
// None.

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const query = sql`
      SELECT "user", SUM("amount") as total_earned
      FROM transactions
      GROUP BY "user"
      ORDER BY total_earned DESC
      LIMIT 10
    `;
    
    const data = await query;

    // Empty results
    if (data.length === 0) {
      return res.status(200).json({ data: [] });
    }

    res.status(200).json({ data });

  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
