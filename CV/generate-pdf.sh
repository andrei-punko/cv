#!/bin/sh

# Платформенно независимый скрипт для генерации PDF из Markdown файлов
# Использует Node.js скрипт generate-pdf.js

# Проверяем наличие Node.js
if ! command -v node &> /dev/null; then
    echo "Ошибка: Node.js не установлен!"
    echo "Установите Node.js: https://nodejs.org/"
    exit 1
fi

# Проверяем наличие npm
if ! command -v npm &> /dev/null; then
    echo "Ошибка: npm не установлен!"
    echo "Установите npm вместе с Node.js: https://nodejs.org/"
    exit 1
fi

# Проверяем наличие node_modules
if [ ! -d "node_modules" ]; then
    echo "Установка зависимостей..."
    npm install
    if [ $? -ne 0 ]; then
        echo "Ошибка при установке зависимостей!"
        exit 1
    fi
fi

# Запускаем Node.js скрипт
node generate-pdf.js
