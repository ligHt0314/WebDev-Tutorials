
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
let books = require('./books.json')

const app = express();
const PORT = 4999;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

app.post('/books', (req, res) => {
    const nextId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
    
    const newBook = {
        id: nextId,
        title: req.body.title,
        author: req.body.author
    };
    
    books.push(newBook);
    
    res.status(201).json(newBook);
});


app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === bookId);
    
    if (index !== -1) {
        // Update the book at the found index
        books[index] = { 
            id: bookId, 
            title: req.body.title, 
            author: req.body.author 
        };
        res.json(books[index]);
    } else {
        res.status(404).send('Book not found');
    }
});

// DELETE
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    
    const initialLength = books.length;
    books = books.filter(b => b.id !== bookId);
    
    if (books.length < initialLength) {
        res.status(200).send('Book deleted');
    } else {
        res.status(404).send('Book not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});