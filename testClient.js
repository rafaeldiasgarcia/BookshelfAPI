const fetch = require('node-fetch');
const bookIdToFetch = 'e98bfe6c-6779-4c23-8602-4ae180ab5482';
const baseUrl = 'http://localhost:3000';

async function fetchSpecificBook(id) {
    const url = `${baseUrl}/books/${id}`;
    console.log(`Tentando buscar livro em: ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errorBody = await response.json().catch(() => ({ message: response.statusText }));
            throw new Error(`Erro ${response.status}: ${errorBody.message || 'Erro desconhecido'}`);
        }
        const book = await response.json();
        console.log("\n--- Livro Encontrado ---");
        console.log(book);
        console.log("-----------------------\n");
    } catch (error) {
        console.error("\n--- Falha ao buscar livro ---");
        console.error(error.message);
        console.error("---------------------------\n");
    }
}

async function fetchAllBooks() {
    const url = `${baseUrl}/books`;
    console.log(`Tentando buscar todos os livros em: ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errorBody = await response.json().catch(() => ({ message: response.statusText }));
            throw new Error(`Erro ${response.status}: ${errorBody.message || 'Erro desconhecido'}`);
        }
        const books = await response.json();
        console.log(`\n--- Lista de Livros (${books.length}) ---`);
        console.log(books);
        console.log("---------------------------\n");
        return books;
    } catch (error) {
        console.error("\n--- Falha ao buscar todos os livros ---");
        console.error(error.message);
        console.error("-----------------------------------\n");
    }
}

if (!bookIdToFetch || bookIdToFetch === 'COLOQUE_UM_ID_VALIDO_AQUI') {
    console.warn("AVISO: ID do livro não foi substituído em 'bookIdToFetch'. Buscando apenas a lista completa.");
    fetchAllBooks();
} else {
    fetchSpecificBook(bookIdToFetch);
}