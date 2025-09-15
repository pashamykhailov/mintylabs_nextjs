import axios from 'axios'
import nodemailer from 'nodemailer'
import type { Lead } from '@/pages/api/leads'

// Email notification service
export async function sendEmailNotification(lead: Lead): Promise<void> {
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS

  if (!smtpUser || !smtpPass) {
    console.log('Email credentials not configured, skipping email notification')
    return
  }

  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const emailTemplate = generateEmailTemplate(lead)

  const mailOptions = {
    from: process.env.FROM_EMAIL || 'noreply@mintylabs.com',
    to: process.env.TO_EMAIL || 'hello@mintylabs.com',
    subject: `🚀 Новая заявка: ${lead.fullName} из ${lead.company}`,
    html: emailTemplate,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('✅ Email notification sent successfully')
  } catch (error) {
    console.error('❌ Failed to send email notification:', error)
    throw error
  }
}

// Telegram notification service
export async function sendTelegramNotification(lead: Lead): Promise<void> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.log('Telegram credentials not configured, skipping Telegram notification')
    return
  }

  const message = generateTelegramMessage(lead)

  try {
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
    })
    console.log('✅ Telegram notification sent successfully')
  } catch (error) {
    console.error('❌ Failed to send Telegram notification:', error)
    throw error
  }
}

// Email template generator
function generateEmailTemplate(lead: Lead): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
      <div style="background: linear-gradient(135deg, #4ade80, #14b8a6); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🚀 Новая заявка!</h1>
        <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Minty Labs - Новый клиент</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #1f2937; margin-top: 0;">👤 Информация о клиенте</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Имя:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${lead.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${lead.email}" style="color: #4ade80;">${lead.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Компания:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${lead.company}</td>
          </tr>
          ${lead.role ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Роль:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${lead.role}</td>
          </tr>
          ` : ''}
          ${lead.seniority ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Уровень:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${lead.seniority}</td>
          </tr>
          ` : ''}
          ${lead.techStack ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Технологии:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${lead.techStack}</td>
          </tr>
          ` : ''}
          ${lead.timeZone ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Часовой пояс:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${lead.timeZone}</td>
          </tr>
          ` : ''}
          ${lead.startDate ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Дата старта:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${lead.startDate}</td>
          </tr>
          ` : ''}
        </table>

        ${lead.description ? `
        <h3 style="color: #1f2937; margin-top: 30px;">📋 Описание проекта</h3>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #4ade80;">
          <p style="margin: 0; line-height: 1.6;">${lead.description}</p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #f0fdf4, #ecfdf5); border-radius: 8px; text-align: center;">
          <h3 style="color: #15803d; margin: 0 0 10px 0;">⏰ Время ответа: 48 часов</h3>
          <p style="color: #16a34a; margin: 0;">Не забудьте связаться с клиентом в ближайшее время!</p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px;">
        <p>📅 Заявка получена: ${new Date(lead.createdAt).toLocaleString('ru-RU')}</p>
        <p>🌐 Источник: Website Form</p>
        <p>🆔 ID заявки: ${lead.id}</p>
      </div>
    </div>
  `
}

// Telegram message generator
function generateTelegramMessage(lead: Lead): string {
  const optionalFields = []
  
  if (lead.techStack) optionalFields.push(`🛠 *Технологии:* ${lead.techStack}`)
  if (lead.timeZone) optionalFields.push(`🌍 *Часовой пояс:* ${lead.timeZone}`)
  if (lead.startDate) optionalFields.push(`📅 *Дата старта:* ${lead.startDate}`)
  if (lead.description) optionalFields.push(`📋 *Описание:*\n${lead.description}`)

  return `
🚀 *НОВАЯ ЗАЯВКА НА MINTY LABS*

👤 *Клиент:* ${lead.fullName}
📧 *Email:* ${lead.email}
🏢 *Компания:* ${lead.company}
${lead.role ? `💼 *Роль:* ${lead.role}` : ''}
${lead.seniority ? `⭐ *Уровень:* ${lead.seniority}` : ''}

${optionalFields.join('\n')}

⏰ *Время ответа:* 48 часов
📊 *Статус:* Новая заявка
🕐 *Получено:* ${new Date(lead.createdAt).toLocaleString('ru-RU')}
🆔 *ID:* ${lead.id}

🔗 [Написать клиенту](mailto:${lead.email})
  `.trim()
}