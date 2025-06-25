import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Log to Vercel serverless logs
    console.log('ReUsa Event:', req.body);
    res.status(200).json({ ok: true });
  } else {
    res.status(405).end();
  }
} 