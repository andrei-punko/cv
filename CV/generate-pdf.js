#!/usr/bin/env node

/**
 * Локальная генерация PDF из Markdown файлов
 * Требуется: Node.js и установленные зависимости (npm install)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Проверяем наличие необходимых пакетов
function checkDependencies() {
    try {
        require.resolve('md-to-pdf');
    } catch (e) {
        console.error('Ошибка: пакет md-to-pdf не установлен!');
        console.error('Установите зависимости: npm install');
        process.exit(1);
    }
}

// Функция генерации PDF
async function generatePDF(mdFile, pdfFile, cssFile) {
    const mdToPdfModule = require('md-to-pdf');
    // Пробуем разные способы получения функции
    const mdToPdf = mdToPdfModule.mdToPdf || mdToPdfModule.default || mdToPdfModule;
    
    if (typeof mdToPdf !== 'function') {
        console.error('Доступные ключи модуля:', Object.keys(mdToPdfModule));
        throw new Error('mdToPdf не является функцией. Проверьте установку пакета md-to-pdf.');
    }
    
    const mdPath = path.resolve(mdFile);
    const cssPath = path.resolve(cssFile);
    
    if (!fs.existsSync(mdPath)) {
        throw new Error(`Файл не найден: ${mdPath}`);
    }
    
    if (!fs.existsSync(cssPath)) {
        throw new Error(`CSS файл не найден: ${cssPath}`);
    }
    
    const pdf = await mdToPdf(
        { path: mdPath },
        {
            pdf_options: {
                format: 'A4',
                margin: {
                    top: '0.6cm',
                    right: '2.2cm',
                    bottom: '0.6cm',
                    left: '2.2cm'
                }
            },
            stylesheet: cssPath,
            body_class: 'markdown-body',
            launch_options: {
                args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
            }
        }
    );
    
    if (pdf) {
        fs.writeFileSync(pdfFile, pdf.content);
        return true;
    }
    
    return false;
}

// Основная функция
async function main() {
    checkDependencies();
    
    const pdfDir = path.join(__dirname, 'pdf');
    
    // Создаем папку pdf, если её нет
    if (!fs.existsSync(pdfDir)) {
        fs.mkdirSync(pdfDir, { recursive: true });
    }
    
    // Удаляем старые PDF файлы
    const pdfFiles = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'));
    pdfFiles.forEach(file => {
        fs.unlinkSync(path.join(pdfDir, file));
        console.log(`Удален старый файл: ${file}`);
    });
    
    // Генерируем PDF для английской версии
    console.log('Генерация PDF для английской версии CV...');
    try {
        await generatePDF(
            'Andrei_Punko_CV_(eng).md',
            path.join(pdfDir, 'Andrei_Punko_CV_(eng).pdf'),
            'style.css'
        );
        console.log('✓ Английская версия создана');
    } catch (error) {
        console.error(`Ошибка при создании английской версии: ${error.message}`);
    }
    
    // Генерируем PDF для русской версии
    console.log('Генерация PDF для русской версии CV...');
    try {
        await generatePDF(
            'Andrei_Punko_CV_(rus).md',
            path.join(pdfDir, 'Andrei_Punko_CV_(rus).pdf'),
            'style.css'
        );
        console.log('✓ Русская версия создана');
    } catch (error) {
        console.error(`Ошибка при создании русской версии: ${error.message}`);
    }
    
    console.log('\nГенерация PDF завершена!');
}

// Запускаем скрипт
main().catch(error => {
    console.error('Критическая ошибка:', error);
    process.exit(1);
});
