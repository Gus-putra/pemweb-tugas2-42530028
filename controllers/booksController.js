
const books = require('../data/books');

// Menampilkan katalog dan filter buku
exports.index = (req, res) => {
  const q = String(req.query.q || '').trim().toLowerCase();
  const category = String(req.query.category || '').trim();

  const filteredBooks = books.filter((book) => {
    const matchesQuery =
      !q ||
      book.title.toLowerCase().includes(q) ||
      book.author.toLowerCase().includes(q);

    const matchesCategory =
      !category || book.category === category;

    return matchesQuery && matchesCategory;
  });

  const categories = [
    ...new Set(books.map((book) => book.category))
  ];

  res.render('pages/index', {
    title: 'Katalog Buku',
    books: filteredBooks,
    query: String(req.query.q || ''),
    selectedCategory: category,
    categories: categories
  });
};

// Menampilkan detail buku berdasarkan ID
exports.detail = (req, res) => {
  const book = books.find(
    (item) => item.id === req.params.id
  );

  if (!book) {
    return res.status(404).render('pages/not-found', {
      title: 'Buku Tidak Ditemukan',
      message: 'Buku dengan ID tersebut tidak ditemukan.'
    });
  }

  return res.render('pages/detail', {
    title: book.title,
    book: book
  });
};
