const { readData, writeData } = require('../utils/dataHandler');
const { v4: uuidv4 } = require('uuid');

async function getAllBooks(req, res) {
    try {
        const books = await readData();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar livros." });
    }
}

async function getBookById(req, res) {
    try {
        const books = await readData();
        const book = books.find(b => b.id === req.params.id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: "Livro não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar livro." });
    }
}

async function createBook(req, res) {
    try {
        const { title, author, year } = req.body;
        if (!title || !author || !year) {
            return res.status(400).json({ message: "Título, autor e ano são obrigatórios." });
        }
        const books = await readData();
        const newBook = {
            id: uuidv4(),
            title,
            author,
            year: parseInt(year)
        };
        books.push(newBook);
        await writeData(books);
        res.status(201).json(newBook);
    } catch (error) {
        console.error("Erro no createBook:", error);
        res.status(500).json({ message: "Erro ao criar livro." });
    }
}

async function updateBook(req, res) {
    try {
        const books = await readData();
        const bookIndex = books.findIndex(b => b.id === req.params.id);
        if (bookIndex === -1) {
            return res.status(404).json({ message: "Livro não encontrado." });
        }
        const { title, author, year } = req.body;
        const updatedBook = {
            ...books[bookIndex],
            title: title !== undefined ? title : books[bookIndex].title,
            author: author !== undefined ? author : books[bookIndex].author,
            year: year !== undefined ? parseInt(year) : books[bookIndex].year,
        };
        books[bookIndex] = updatedBook;
        await writeData(books);
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar livro." });
    }
}

async function deleteBook(req, res) {
    try {
        let books = await readData();
        const initialLength = books.length;
        books = books.filter(b => b.id !== req.params.id);
        if (books.length === initialLength) {
            return res.status(404).json({ message: "Livro não encontrado." });
        }
        await writeData(books);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar livro." });
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};