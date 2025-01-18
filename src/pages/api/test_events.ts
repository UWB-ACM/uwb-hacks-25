import type { NextApiRequest, NextApiResponse } from 'next';
import sql from '@/src/util/database';

// src/pages/api/test_events.ts
//
// Summary:
// Retrieves all 'events' rows by default, may be filtered for past, current, and future events (based on database NOW() time).
//
// Parameters:
// (Optional) active: boolean - if true, returns currently active events (where 'start' < current time < 'end')
// (Optional) future: boolean - if true, returns future events (where 'start' > current time)
// (Optional) past: boolean - if true, returns past events (where 'end' < current time)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { future, active, past } = req.query;

  const isFuture = future === 'true';
  const isActive = active === 'true';
  const isPast = past === 'true';

  // Default behavior, return all rows
  let query = sql`SELECT * FROM events WHERE 1=1`;

  // 'future' filtering (start > NOW())
  if (isFuture) {
    query = sql`${query} AND "start" > NOW()`;
  }

  // 'active' filtering (start < NOW() < end)
  if (isActive) {
    query = sql`${query} AND NOW() BETWEEN "start" AND "end"`;
  }

  // 'past' filtering (end < NOW())
  if (isPast) {
    query = sql`${query} AND "end" < NOW()`;
  }

  try {
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
