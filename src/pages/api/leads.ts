import type { NextApiRequest, NextApiResponse } from 'next';
import { sendTelegramNotification } from '@/utils/notifications';

export interface Lead {
  id: string;
  fullName: string;
  email: string;
  company: string;
  role?: string;
  techStack?: string;
  seniority?: string;
  timeZone?: string;
  startDate?: string;
  description?: string;
  consent: boolean;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  createdAt: string;
  source: string;
}

type LeadsResponse = {
  success: boolean;
  message?: string;
  data?: any;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LeadsResponse>
) {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'POST') {
      // Создание новой заявки
      const leadData = req.body;

      // Валидация обязательных полей
      if (!leadData.fullName || !leadData.email || !leadData.company) {
        return res.status(400).json({
          success: false,
          message:
            'Пожалуйста, заполните все обязательные поля (имя, email, компания)',
        });
      }

      // Создание объекта заявки
      const lead: Lead = {
        id: Math.random().toString(36).substr(2, 9),
        fullName: leadData.fullName,
        email: leadData.email,
        company: leadData.company,
        role: leadData.role,
        techStack: leadData.techStack,
        seniority: leadData.seniority,
        timeZone: leadData.timeZone,
        startDate: leadData.startDate,
        description: leadData.description,
        consent: leadData.consent || false,
        status: 'new',
        createdAt: new Date().toISOString(),
        source: 'website-form',
      };

      // Логирование для отладки
      console.log('📋 New lead created:', {
        id: lead.id,
        email: lead.email,
        company: lead.company,
        fullName: lead.fullName,
      });

      console.log('process.env.ENABLE_TELEGRAM_NOTIFICATIONS ', process.env.ENABLE_TELEGRAM_NOTIFICATIONS)
      // Асинхронная отправка уведомлений (не блокируем ответ)
      if (process.env.ENABLE_TELEGRAM_NOTIFICATIONS === 'true') {
        (process.env.ENABLE_TELEGRAM_NOTIFICATIONS === 'true'
          ? sendTelegramNotification(lead)
          : Promise.resolve()
        )
          .then((results) => {
            console.log(`✅ Telegram notification sent successfully`);
            console.log('🚀 All notifications processed');
          })
          .catch((error) => {
            console.error('⚠️ Notifications error:', error.message);
          });
      }

      return res.status(201).json({
        success: true,
        message:
          'Заявка успешно отправлена! Мы свяжемся с вами в течение 48 часов. 🚀',
        data: {
          id: lead.id,
          email: lead.email,
          company: lead.company,
        },
      });
    } else if (req.method === 'GET') {
      // Получение статистики заявок
      return res.status(200).json({
        success: true,
        data: {
          total: 42,
          new: 12,
          qualified: 18,
          today: 3,
          conversionRate: 43,
          lastUpdated: new Date().toISOString(),
        },
      });
    }

    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  } catch (error) {
    console.error('Leads API error:', error);
    return res.status(500).json({
      success: false,
      message: 'Произошла ошибка сервера',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
