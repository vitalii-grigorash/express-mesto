const express = require("express");

const app = express();

const { PORT = 3000 } = process.env;

app.get("/", (req, res) => {
  res.send("<h1>Приветушки!</h1>");
});

app.listen(PORT, () => {
  console.log("Слушаем сервер:");
  console.log(PORT);
});
