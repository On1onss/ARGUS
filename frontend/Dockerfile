# Базовый образ с Node.js
FROM node:20

# Установка pnpm
RUN npm install -g pnpm

# Установка рабочей директории
WORKDIR /app

# Копирование зависимостей
COPY . .

# Установка зависимостей
RUN pnpm install

# Команда для запуска фронтенда
CMD ["pnpm", "dev"]
