# Генерация PDF из Markdown файлов

Этот скрипт генерирует PDF файлы из Markdown файлов CV с применением CSS стилей.

## Требования

- Node.js (версия 12 или выше)
- npm (устанавливается вместе с Node.js)

## Установка

1. Установите зависимости:
```bash
npm install
```

## Использование

### Вариант 1: Использование shell скрипта (Linux/macOS/Git Bash)
```bash
chmod +x generate-pdf.sh
./generate-pdf.sh
```

### Вариант 2: Прямой запуск Node.js скрипта (любая платформа)
```bash
node generate-pdf.js
```

### Вариант 3: Использование npm скрипта
```bash
npm run generate
```

## Что делает скрипт

1. Проверяет наличие необходимых зависимостей
2. Удаляет старые PDF файлы из папки `pdf/`
3. Генерирует PDF для английской версии CV (`Andrei_Punko_CV_(eng).md`)
4. Генерирует PDF для русской версии CV (`Andrei_Punko_CV_(rus).md`)
5. Применяет стили из файла `style.css`

## Результат

Сгенерированные PDF файлы сохраняются в папке `pdf/`:
- `Andrei_Punko_CV_(eng).pdf`
- `Andrei_Punko_CV_(rus).pdf`
