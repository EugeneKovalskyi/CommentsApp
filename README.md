## Описание проекта  

> [!IMPORTANT]
> Приложение является моей реализацией тестового задания компании **dzencode**  

**Основные функции приложения:**  
- LovalStorage авторизация
- Добавление комментариев на страницу
- Добавление ответов в режиме real-time
- Добавление пользователя в БД
- Сохранение всех записей в БД
- Сохранение файлов в S3-облаке

> [!NOTE]
> Используемые технологии:  
> GraphQL, Nest, Prisma, React, Socket.io, SQLite, Vite  

<br>

## Инструкция по запуску приложения в Docker  
1. Скачать репозиторий:  
  `git clone https://github.com/EugeneKovalskyi/CommentsApp.git`  
2. Установить Docker по инструкции:  
  `https://docs.docker.com/engine/install/`  
3. Создать в папке server файл .env с содержанием:  

  `DATABASE_URL=file:../../db.db  

   RECAPTCHA_URL=https://www.google.com/recaptcha/api/siteverify  

   RECAPTCHA_SECRET_KEY=*{Приватный ключ reCAPTCHA}*  

   AWS_S3_REGION=*{Приватные данные AWS S3}*  

   AWS_SECRET_ACCESS_KEY=*{Приватные данные AWS S3}*  

   AWS_ACCESS_KEY_ID=*{Приватные данные AWS S3}*  

   AWS_BUCKET_NAME=*{Приватные данные AWS S3}*  

   MAX_IMG_SIZE=10485760  
   
   MAX_TXT_SIZE=102400`  
4. В папке CommentsApp вызвать комманду:  
  `docker compose up -d --build`  
5. Открыть в браузере http://localhost  

<br>

## Инструкция по подготовке приложения к разработке  
1. Скачать репозиторий:  
  `git clone https://github.com/EugeneKovalskyi/CommentsApp.git`  
2. В папке client установить зависимости:  
  `npm i`  
3. В папке server установить зависимости:  
  `npm i`  
4. В папке server вызвать команды:  
  - Сгенерировать prisma-типы:  
    `npx prisma generate`  
  - Сгенерировать файл БД:  
    `npx prisma db push`  
5. Создать в папке server файл .env с содержанием:  
  См. п. 3 "Инструкции по локальному запуску приложения в Docker"  
6. В папке server запустить сервер в dev-режиме:  
  `npm run start:dev`  
7. В папке client запустить клиент в dev-режиме:  
  `npm run dev`  