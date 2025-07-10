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
2. Создать в папке server файл .env с содержанием:  
  - `RECAPTCHA_URL`
  - `RECAPTCHA_SECRET_KEY`
  - `AWS_S3_REGION`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_ACCESS_KEY_ID`
  - `AWS_BUCKET_NAME`
3. Установить Docker по инструкции:  
  `https://docs.docker.com/engine/install/` 
4. В папке CommentsApp вызвать комманду:  
  `docker compose up -d --build`  
5. Открыть в браузере http://localhost  

<br>

## Инструкция по подготовке приложения к разработке  
1. Скачать репозиторий:  
  `git clone https://github.com/EugeneKovalskyi/CommentsApp.git`  
2. В папке server :
  - выполнить п.3 "Инструкции по запуску приложения в Docker"
  - `npm i`               - установить зависимости
  - `npx prisma generate` - сгенерировать prisma-типы  
  - `npx prisma db push`  - сгенерировать файл БД
  - `npm run start:dev`   - запустить сервер в dev-режиме
3. В папке client:
  - `npm i`       - установить зависимости
  - `npm run dev` - запустить клиент в dev-режиме
  