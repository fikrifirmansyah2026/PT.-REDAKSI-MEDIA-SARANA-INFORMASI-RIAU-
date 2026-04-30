const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

let news = [
  { id: 1, title: "Berita Awal", content: "Ini berita pertama" }
];

app.get('/', (req, res) => {
  res.json({ status: "API Aktif" });
});

app.get('/api/news', (req, res) => {
  res.json(news);
});

app.listen(PORT, () => {
  console.log("Server jalan di port " + PORT);
});
