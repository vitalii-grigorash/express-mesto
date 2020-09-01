const User = require("../models/user");

const getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.status(200).send(user);
        return;
      }
      res.status(404).send({ message: "Нет пользователя с таким id" });
    })
    .catch(() => {
      res.status(400).send({ message: "Переданы некорректные данные" });
    });
};

const getAllUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const postUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: "Произошла ошибка" }));
};

const updateUser = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      if (user) {
        res.send({ data: user });
        return;
      }
      res.status(404).send({ message: "Нет пользователя с таким id" });
    })
    .catch(() => res.status(500).send({ message: "Произошла ошибка" }));
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      if (user) {
        res.send({ data: user });
        return;
      }
      res.status(404).send({ message: "Нет пользователя с таким id" });
    })
    .catch(() => res.status(500).send({ message: "Произошла ошибка" }));
};

module.exports = {
  getUser,
  getAllUsers,
  postUser,
  updateUser,
  updateAvatar,
};
