# 🚀 Развертывание на Vercel - Полное Next.js приложение

## ✅ Готово к развертыванию

Это полноценное Next.js приложение с frontend и backend в одном проекте.

### 🌟 Что включено:

#### Frontend (Pages):
- ✅ `/` - Главная страница с полным дизайном Minty Labs
- ✅ Все секции: Header, Hero, Stats, Capabilities, Case Studies, Testimonials, Lead Form, Footer
- ✅ Responsive дизайн с Tailwind CSS
- ✅ TypeScript типизация
- ✅ Smooth анимации и hover эффекты

#### Backend (API Routes):
- ✅ `GET /api/health` - Проверка здоровья
- ✅ `POST /api/leads` - Создание заявки + уведомления 
- ✅ `GET /api/leads` - Статистика заявок
- ✅ `GET /api/notifications/status` - Статус настроек
- ✅ `POST /api/notifications/test` - Тест уведомлений

#### Уведомления:
- ✅ Email с красивым HTML дизайном
- ✅ Telegram с эмодзи и форматированием
- ✅ Асинхронная отправка (не блокирует API)

## 🚀 Шаги развертывания на Vercel

### 1. Подготовьте репозиторий GitHub
```bash
# В папке minty-labs-nextjs
git init
git add .
git commit -m "Initial commit: Full-stack Next.js Minty Labs app"
git remote add origin https://github.com/ваш-username/minty-labs-nextjs.git
git push -u origin main
```

### 2. Разверните на Vercel
1. Перейдите на [vercel.com](https://vercel.com)
2. Нажмите "New Project"
3. Импортируйте GitHub репозиторий
4. **Framework**: Next.js (автоматически определится)
5. **Root Directory**: оставьте пустым
6. Нажмите "Deploy"

### 3. Настройте Environment Variables
Добавьте в Vercel Dashboard > Settings > Environment Variables:

#### Email уведомления:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
FROM_EMAIL=noreply@mintylabs.com
TO_EMAIL=hello@mintylabs.com
ENABLE_EMAIL_NOTIFICATIONS=true
```

#### Telegram уведомления:
```env
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=your-chat-id
ENABLE_TELEGRAM_NOTIFICATIONS=true
```

### 4. Проверьте развертывание
После успешного deploy проверьте:

```bash
# Замените YOUR_DOMAIN на ваш Vercel домен

# Главная страница
curl https://YOUR_DOMAIN.vercel.app/

# API здоровья
curl https://YOUR_DOMAIN.vercel.app/api/health

# Статус уведомлений
curl https://YOUR_DOMAIN.vercel.app/api/notifications/status

# Тест уведомлений
curl -X POST https://YOUR_DOMAIN.vercel.app/api/notifications/test

# Тест создания заявки
curl -X POST https://YOUR_DOMAIN.vercel.app/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "company": "Test Company", 
    "role": "Frontend Developer",
    "seniority": "Senior (5+ years)",
    "consent": true
  }'
```

## 📧 Настройка Gmail App Password

### 1. Включите 2-Factor Authentication
- Google Account > Security
- Включите 2-Step Verification

### 2. Создайте App Password
- Security > App passwords
- Выберите "Mail"
- Скопируйте 16-символьный пароль
- Используйте как `SMTP_PASS`

## 📱 Настройка Telegram Bot

### 1. Создайте бота
1. Найдите @BotFather в Telegram
2. Отправьте `/newbot`
3. Следуйте инструкциям
4. Скопируйте токен

### 2. Получите Chat ID
1. Отправьте сообщение боту
2. Перейдите: `https://api.telegram.org/bot<TOKEN>/getUpdates`
3. Найдите ваш chat ID в ответе

## 🎯 Ожидаемые результаты

### ✅ Frontend:
- Красивая главная страница на вашем домене
- Полностью responsive дизайн
- Рабочая форма обратной связи
- Smooth анимации и переходы

### ✅ Backend API:
- `/api/health` возвращает статус OK
- `/api/leads` принимает и обрабатывает заявки
- `/api/notifications/status` показывает конфигурацию
- `/api/notifications/test` отправляет тестовые сообщения

### ✅ Уведомления:
- **Email**: HTML письма с брендингом приходят на указанный адрес
- **Telegram**: Мгновенные сообщения с эмодзи в чат/канал
- **Логи**: Все действия логируются в Vercel

## 🧪 Тестирование

### 1. Заполните форму на сайте
- Откройте ваш Vercel домен
- Прокрутите до формы "Get Your Tailored Shortlist"
- Заполните все обязательные поля
- Нажмите "Get My Shortlist"

### 2. Проверьте уведомления
- **Email**: Проверьте почту (включая спам)
- **Telegram**: Проверьте чат с ботом
- Оба уведомления должны прийти в течение нескольких секунд

### 3. Проверьте логи
```bash
vercel logs https://your-domain.vercel.app --follow
```

В логах должно быть:
```
📋 New lead created: { id: 'abc123', email: '...', company: '...' }
✅ Email notification sent successfully
✅ Telegram notification sent successfully  
🚀 All notifications processed
```

## 🛠️ Отладка

### Если форма не работает:
1. Проверьте `/api/health` - должен возвращать статус OK
2. Проверьте `/api/notifications/status` - настройки уведомлений
3. Посмотрите логи Vercel на ошибки

### Если уведомления не приходят:
1. Протестируйте: `POST /api/notifications/test`
2. Проверьте environment variables в Vercel
3. Убедитесь что Gmail App Password правильный
4. Проверьте Telegram bot token и chat ID

## 🎉 Готово!

**У вас есть полноценное приложение:**

- 🌐 **Frontend**: Красивый сайт Minty Labs
- ⚙️ **Backend**: REST API для обработки заявок
- 📧 **Email**: Профессиональные уведомления
- 📱 **Telegram**: Мгновенные уведомления
- 🚀 **Production**: Готово к использованию

**Next.js + Vercel = Идеальная комбинация! 🎊**

### Преимущества этого подхода:
- ✅ Единое приложение - проще поддерживать
- ✅ Автоматический deploy из GitHub
- ✅ Нет проблем с CORS - все в одном домене
- ✅ Server-side rendering для SEO
- ✅ Автоматическая оптимизация от Vercel