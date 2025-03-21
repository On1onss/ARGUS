# Базовый образ с Python
FROM python:3.11-slim

# Установка рабочей директории
WORKDIR /app

# Копирование зависимостей
COPY . .
#COPY ../requirements.txt ./
# Установка зависимостей
RUN pip install --upgrade pip && \
    pip install uv
#    pip install -r requirements.txt
#Создание бд
#RUN touch argus.db
# Инициализация базы данных
RUN uv sync
RUN uv run alembic upgrade head

RUN uv run init_db.py

# Команда для запуска сервера
CMD ["uv", "run", "main.py"]
#RUN uv run main.py
