const User = require("../models/user");

const getUser = (req, res) => {
  User.findById(req.params.id)
    .orFail(new Error("NotValidUserId"))
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.message === "NotValidUserId") {
        res.status(404).send({ message: "Нет пользователя с таким id" });
      } else {
        res.status(400).send({ message: "Переданы некорректные данные" });
      }
    });
};

const getAllUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(() => {
      res.status(500).send({ message: "На сервере произошла ошибка" });
    });
};

const postUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        res.status(400).send({ message: "Переданы некорректные данные" });
      } else {
        res.status(500).send({ message: "Ошибка сервера" });
      }
    });
};

const updateUser = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .orFail(new Error("NotValidUserId"))
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch((err) => {
      if (err.message === "NotValidUserId") {
        res.status(404).send({ message: "Нет пользователя с таким id" });
      } else {
        res.status(400).send({ message: "Переданы некорректные данные" });
      }
    });
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .orFail(new Error("NotValidUserId"))
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch((err) => {
      if (err.message === "NotValidUserId") {
        res.status(404).send({ message: "Нет пользователя с таким id" });
      } else {
        res.status(400).send({ message: "Переданы некорректные данные" });
      }
    });
};

module.exports = {
  getUser,
  getAllUsers,
  postUser,
  updateUser,
  updateAvatar,
};
