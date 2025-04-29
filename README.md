# BookshelfAPI 📚

Uma API REST simples construída com Node.js e Express para gerenciar uma coleção de livros. Este projeto serve como um exemplo básico de desenvolvimento back-end, ideal para fins de aprendizado e portfólio. Os dados são armazenados em um arquivo JSON local (`data/books.json`).

## Funcionalidades Principais

*   **CRUD completo para livros:**
    *   Criar (POST)
    *   Ler (GET - todos e por ID)
    *   Atualizar (PUT)
    *   Deletar (DELETE)
*   Persistência de dados simples usando arquivo JSON.
*   Geração automática de IDs únicos (UUID) para novos livros.
*   Estrutura básica de projeto Express (Rotas, Controllers, Utils).

## Tecnologias Utilizadas

*   **Node.js:** Ambiente de execução JavaScript no lado do servidor.
*   **Express.js:** Framework web para Node.js, usado para criar as rotas e gerenciar requisições/respostas HTTP.
*   **UUID:** Biblioteca para geração de identificadores únicos universais.
*   **JSON:** Formato leve de troca de dados, usado como nosso "banco de dados".

## Pré-requisitos

Antes de começar, garanta que você tenha instalado:

*   [Node.js](https://nodejs.org/) (versão LTS recomendada - ex: v18 ou v20+)
*   [npm](https://www.npmjs.com/) (geralmente vem instalado com o Node.js)
*   Uma ferramenta para testar APIs, como [Postman](https://www.postman.com/downloads/) ou [Insomnia](https://insomnia.rest/download).

## Instalação

1.  **Clone o repositório (ou baixe os arquivos):**
    ```bash
    git clone https://github.com/rafaeldiasgarcia/BookshelfAPI.git
    cd BookshelfAPI
    ```
    *Se não estiver usando Git, apenas navegue até a pasta do projeto que você já criou.*

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```
    *(Isso instalará o Express e o UUID, listados no `package.json`)*.

## Executando o Servidor

Para iniciar o servidor da API, execute o seguinte comando no terminal, dentro da pasta raiz do projeto:

```bash
node server.js
