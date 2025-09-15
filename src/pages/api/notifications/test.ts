import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmailNotification, sendTelegramNotification } from '@/utils/notifications'
import type { Lead } from '../leads'

type TestResponse = {
  success: boolean
  message?: string
  data?: {
    email: {
      enabled: boolean
      sent: boolean
      message?: string
    }
    telegram: {
      enabled: boolean
      sent: boolean
      message?: string
    }
  }
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TestResponse>
) {
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    })
  }

  try {
    console.log('🧪 Testing notifications...')

    // Создаем тестовую заявку
    const testLead: Lead = {
      id: 'test-' + Math.random().toString(36).substr(2, 9),
      fullName: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      role: 'Full-stack Developer',
      seniority: 'Senior (5+ years)',
      techStack: 'React, Node.js, TypeScript',
      timeZone: 'CET (Central European)',
      description: 'Это тестовое сообщение для проверки уведомлений Minty Labs.',
      consent: true,
      status: 'new',
      createdAt: new Date().toISOString(),
      source: 'notification-test'
    }

    const results = {
      email: {
        enabled: process.env.ENABLE_EMAIL_NOTIFICATIONS === 'true',
        sent: false,
        message: ''
      },
      telegram: {
        enabled: process.env.ENABLE_TELEGRAM_NOTIFICATIONS === 'true',
        sent: false,
        message: ''
      }
    }

    // Тест Email уведомления
    if (results.email.enabled) {
      try {
        await sendEmailNotification(testLead)
        results.email.sent = true
        results.email.message = 'Test email sent successfully'
      } catch (error) {
        results.email.message = `Email error: ${error instanceof Error ? error.message : 'Unknown error'}`
      }
    } else {
      results.email.message = 'Email notifications disabled or not configured'
    }

    // Тест Telegram уведомления
    if (results.telegram.enabled) {
      try {
        await sendTelegramNotification(testLead)
        results.telegram.sent = true
        results.telegram.message = 'Test Telegram message sent successfully'
      } catch (error) {
        results.telegram.message = `Telegram error: ${error instanceof Error ? error.message : 'Unknown error'}`
      }
    } else {
      results.telegram.message = 'Telegram notifications disabled or not configured'
    }

    console.log('📊 Test results:', results)

    return res.status(200).json({
      success: true,
      message: 'Notification tests completed',
      data: results
    })

  } catch (error) {
    console.error('❌ Test error:', error)
    return res.status(500).json({
      success: false,
      message: 'Test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}