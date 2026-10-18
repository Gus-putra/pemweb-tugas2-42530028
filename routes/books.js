
const express = require('express');
const router = express.Router();

const booksController = require('../controllers/booksController');

// Menampilkan katalog dan filter buku
router.get('/', booksController.index);

// Menampilkan detail buku berdasarkan ID
router.get('/books/:id', booksController.detail);

module.exports = router;
