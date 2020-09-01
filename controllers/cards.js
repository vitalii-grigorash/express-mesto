const Card = require("../models/card");

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch(() => {
      res.status(500).send({ message: "На сервере произошла ошибка" });
    });
};

const postCard = (req, res) => {
  const { name, link } = req.body;
  const ownerId = req.user._id;

  Card.create({ name, link, owner: ownerId })
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(400).send({ message: "Переданы некорректные данные" }));
};

const deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .then((card) => {
      if (card) {
        res.send({ data: card });
        return;
      }
      res.status(404).send({ message: "Карточка не найдена" });
    })
    .catch(() => {
      res.status(400).send({ message: "Переданы некорректные данные" });
    });
};

const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (card) {
        res.send({ data: card });
        return;
      }
      res.status(404).send({ message: "Карточка не найдена" });
    })
    .catch(() => {
      res.status(400).send({ message: "Переданы некорректные данные" });
    });
};

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (card) {
        res.send({ data: card });
        return;
      }
      res.status(404).send({ message: "Карточка не найдена" });
    })
    .catch(() => {
      res.status(400).send({ message: "Переданы некорректные данные" });
    });
};

module.exports = {
  getCards,
  postCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
