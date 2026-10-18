
const express = require('express');
const path = require('path');
const bookRoutes = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 3000;

// Mengatur EJS sebagai template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mengakses file CSS
app.use(express.static(path.join(__dirname, 'public')));

// Menggunakan routes buku
app.use('/', bookRoutes);

// Menangani halaman yang tidak ditemukan
app.use((req, res) => {
  res.status(404).render('pages/not-found', {
    title: 'Halaman Tidak Ditemukan',
    message: 'Halaman yang kamu cari tidak tersedia.'
  });
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Aplikasi berjalan di http://localhost:${PORT}`);
});
