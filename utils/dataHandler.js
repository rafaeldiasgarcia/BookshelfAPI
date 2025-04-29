const fs = require('fs').promises;
const path = require('path');

const booksFilePath = path.join(__dirname, '../data/books.json');

async function readData() {
    try {
        const data = await fs.readFile(booksFilePath, 'utf-8');
        return data ? JSON.parse(data) : [];
    } catch (error) {
        if (error.code === 'ENOENT') {
            return []; // Arquivo não existe ainda, retorna vazio
        }
        console.error("Erro ao ler o arquivo de dados:", error);
        throw error;
    }
}

async function writeData(data) {
    try {
        const jsonData = JSON.stringify(data, null, 2); // Formata o JSON para leitura
        await fs.writeFile(booksFilePath, jsonData, 'utf-8');
    } catch (error) {
        console.error("Erro ao escrever no arquivo de dados:", error);
        throw error;
    }
}

module.exports = { readData, writeData };