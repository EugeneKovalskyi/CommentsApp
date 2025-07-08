## Описание проекта

> [!IMPORTANT]
> Приложение является моей реализацией тестового задания компании **dzencode**

**Основные функции приложения:**
- Простая авторизация
- Добавление комментариев на страницу
- Добавление ответов в режиме real-time
- Добавление пользователя в БД
- Сохранение всех записей в БД
- Сохранение файлов в S3-облаке

> [!NOTE]
> Основные используемые технологии:
> Nest, GraphQL, Socket.io, Prisma, SQLite, React, Vite

<br>

## Инструкция по подготовке приложения к разработке


## Инициализация БД

CREATE TABLE IF NOT EXISTS users (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  home_page TEXT
);

CREATE TABLE IF NOT EXISTS comments (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  text TEXT NOT NULL,
  date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER NOT NULL,
  parent_id INTEGER,
  CONSTRAINT comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT comments_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES comments (id) ON DELETE NO ACTION ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS imgs (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  comment_id INTEGER NOT NULL,
  CONSTRAINT imgs_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES comments (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS txts (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  comment_id INTEGER NOT NULL,
  CONSTRAINT txts_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES comments (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX users_name_idx ON users(name);