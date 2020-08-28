const router = require("express").Router();
const User = require("../models/user");

const getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: "Нет пользователя с таким id" });
      } else {
        res.status(200).send(user);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
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

router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.post("/users", postUser);

module.exports = router;
