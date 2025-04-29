const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Bem-vindo à BookshelfAPI!');
});

app.use('/books', bookRoutes);
app.use((req, res, next) => {
    res.status(404).json({ message: 'Rota não encontrada.' });
});

app.use((err, req, res, next) => {
    console.error("Erro inesperado:", err.stack || err);
    res.status(500).json({ message: 'Ocorreu um erro interno no servidor.' });
});

app.listen(PORT, () => {
    console.log(`Servidor BookshelfAPI rodando na porta ${PORT}`);
    console.log(`Acesse em http://localhost:${PORT}`);
});