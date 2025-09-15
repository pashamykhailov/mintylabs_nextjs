import type { NextApiRequest, NextApiResponse } from 'next'

type HealthResponse = {
  status: string
  message: string
  timestamp: string
  environment: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
) {
  res.status(200).json({
    status: 'OK',
    message: 'Minty Labs Next.js Full-Stack App is running! 🚀',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  })
}