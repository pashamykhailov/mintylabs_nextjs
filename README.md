# 🚀 Minty Labs - Complete Next.js Full-Stack Application

## 📋 Обзор

Полнофункциональное Next.js приложение для Minty Labs с frontend и backend в одном проекте, готовое к развертыванию на Vercel.

## 🌟 Особенности

### 🎨 Frontend (Next.js + React + Tailwind CSS)
- ✨ Pixel perfect дизайн
- 📱 Полностью responsive
- 🎭 Smooth анимации
- ⚡ Server-side rendering
- 🎯 TypeScript типизация

### 🔧 Backend (Next.js API Routes)
- 🔥 RESTful API endpoints
- 📧 Email уведомления с HTML дизайном
- 📱 Telegram bot интеграция
- 🛡️ Валидация данных
- 📊 Логирование и мониторинг

### 📢 Система уведомлений
- 📧 **Email**: Красивые HTML письма
- 📱 **Telegram**: Мгновенные сообщения
- 🔄 Асинхронная отправка
- ⚙️ Гибкая настройка

## 📁 Структура проекта

```
minty-labs-nextjs/
├── src/
│   ├── pages/
│   │   ├── api/              # Backend API routes
│   │   │   ├── health.ts
│   │   │   ├── leads.ts
│   │   │   └── notifications/
│   │   ├── index.tsx         # Главная страница
│   │   ├── _app.tsx
│   │   └── _document.tsx
│   ├── components/           # React компоненты
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── LeadForm.tsx
│   │   └── ...
│   ├── utils/               # Утилиты
│   │   └── notifications.ts
│   └── styles/
│       └── globals.css
├── .env.local               # Environment variables
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🚀 Быстрый старт

### Установка и запуск
```bash
# Клонирование и установка
git clone <repo-url>
cd minty-labs-nextjs
yarn install

# Запуск в development режиме
yarn dev
```

Откройте http://localhost:3000

### 🔧 Environment Variables

Создайте `.env.local`:
```env
# Email уведомления (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@mintylabs.com
TO_EMAIL=hello@mintylabs.com

# Telegram уведомления
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=your-chat-id

# Включение уведомлений
ENABLE_EMAIL_NOTIFICATIONS=true
ENABLE_TELEGRAM_NOTIFICATIONS=true
```

## 📋 API Endpoints

### Frontend Pages
- `/` - Главная страница с полным сайтом

### Backend API Routes
- `GET /api/health` - Проверка здоровья API
- `POST /api/leads` - Создание заявки + уведомления
- `GET /api/leads` - Статистика заявок
- `GET /api/notifications/status` - Статус настроек
- `POST /api/notifications/test` - Тест уведомлений

## 🚀 Развертывание на Vercel

### 1. Подготовка
```bash
# Убедитесь что проект работает локально
yarn build
yarn start
```

### 2. Vercel Deploy
1. Перейдите на [vercel.com](https://vercel.com)
2. Нажмите "New Project"
3. Импортируйте GitHub репозиторий
4. **Framework**: Next.js (автоопределение)
5. **Root Directory**: оставьте пустым
6. Нажмите "Deploy"

### 3. Environment Variables
Добавьте в Vercel Dashboard > Settings > Environment Variables все переменные из `.env.local`.

### 4. Проверка
После развертывания проверьте:
```bash
# Главная страница
curl https://your-app.vercel.app/

# API здоровья
curl https://your-app.vercel.app/api/health

# Статус уведомлений
curl https://your-app.vercel.app/api/notifications/status

# Тест уведомлений
curl -X POST https://your-app.vercel.app/api/notifications/test

# Создание заявки
curl -X POST https://your-app.vercel.app/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "role": "Frontend Developer",
    "seniority": "Senior (5+ years)"
  }'
```

## 📧 Настройка Gmail

### 1. Включите 2FA
- Google Account > Security > 2-Step Verification

### 2. App Password
- Security > App passwords > Mail
- Используйте 16-символьный пароль как `SMTP_PASS`

## 📱 Настройка Telegram

### 1. Создание бота
1. @BotFather > `/newbot`
2. Скопируйте токен

### 2. Chat ID
1. Отправьте сообщение боту
2. `https://api.telegram.org/bot<TOKEN>/getUpdates`
3. Найдите chat ID

## 🎯 Преимущества Next.js

### 1. Единое приложение
- ✅ Frontend и Backend в одном проекте
- ✅ Простое развертывание на Vercel
- ✅ Общие типы и утилиты
- ✅ Server-side rendering

### 2. Производительность
- ⚡ Автоматическая оптимизация
- 📦 Code splitting
- 🖼️ Image optimization
- 🚀 Edge functions

### 3. Developer Experience
- 🔥 Hot reload для frontend и API
- 🛠️ TypeScript поддержка
- 📊 Встроенная аналитика
- 🔍 Отличный debugging

## 🧪 Тестирование

### Локальное тестирование
```bash
# Frontend
open http://localhost:3000

# API endpoints
curl http://localhost:3000/api/health
curl -X POST http://localhost:3000/api/notifications/test
```

### Production тестирование
```bash
# Заполните форму на сайте
# Проверьте email и Telegram
# Убедитесь что уведомления приходят
```

## 📊 Мониторинг

### Vercel Analytics
- Включите в настройках проекта
- Отслеживайте производительность

### Логи
```bash
vercel logs https://your-app.vercel.app --follow
```

## 🛡️ Безопасность

- ✅ CORS настроен в next.config.js
- ✅ Валидация данных в API routes
- ✅ Environment variables защищены
- ✅ TypeScript типизация

## 🎉 Результат

**Полнофункциональное приложение с:**

- ✅ **Красивый frontend** на главной странице
- ✅ **Рабочий backend** через API routes
- ✅ **Email уведомления** с HTML дизайном
- ✅ **Telegram уведомления** с эмодзи
- ✅ **Vercel готово** к production deployment
- ✅ **Единое приложение** - проще поддерживать

**Next.js + Vercel = Perfect Match! 🎊**