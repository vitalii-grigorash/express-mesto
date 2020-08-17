const router = require("express").Router();
const fs = require("fs").promises;
const path = require("path");

function getFile(file) {
  return fs.readFile(file, { encoding: "utf8" });
}

const getCards = (req, res) => {
  getFile(path.join(__dirname, "..", "data", "cards.json"))
    .then((data) => {
      const cards = JSON.parse(data);
      res.status(200).send(cards);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

router.get("/cards", getCards);

module.exports = router;
