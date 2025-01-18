import type { NextApiRequest, NextApiResponse } from 'next';
import sql from '@/src/util/database';

// src/pages/api/test_transactions.ts
//
// Retrieves all 'transactions' rows for a given 'user' id
//
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { user } = req.query;

    // Missing 'user' id
    if (!user || typeof user !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid "user" parameter' });
    }

    // Query for transactions
    try {
      const data = await sql`SELECT * FROM transactions WHERE "user" = ${user}`;
      res.status(200).json({ data });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  
  // Incorrect method
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: 'Method not allowed' });
  }
}
