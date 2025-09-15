import type { NextApiRequest, NextApiResponse } from 'next'

type StatusResponse = {
  success: boolean
  data: {
    email: {
      enabled: boolean
      configured: boolean
      host?: string
      from?: string
      to?: string
    }
    telegram: {
      enabled: boolean
      configured: boolean
      botToken?: string
      chatId?: string
    }
    environment: string
    timestamp: string
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StatusResponse>
) {
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      data: {
        email: { enabled: false, configured: false },
        telegram: { enabled: false, configured: false },
        environment: 'error',
        timestamp: new Date().toISOString()
      }
    })
  }

  const status: StatusResponse = {
    success: true,
    data: {
      email: {
        enabled: process.env.ENABLE_EMAIL_NOTIFICATIONS === 'true',
        configured: !!(process.env.SMTP_USER && process.env.SMTP_PASS),
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        from: process.env.FROM_EMAIL || 'noreply@mintylabs.com',
        to: process.env.TO_EMAIL || 'hello@mintylabs.com',
      },
      telegram: {
        enabled: process.env.ENABLE_TELEGRAM_NOTIFICATIONS === 'true',
        configured: !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
        botToken: process.env.TELEGRAM_BOT_TOKEN ? '✅ Configured' : '❌ Not set',
        chatId: process.env.TELEGRAM_CHAT_ID || 'Not set',
      },
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString()
    }
  }

  return res.status(200).json(status)
}