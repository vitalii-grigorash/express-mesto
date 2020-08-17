const router = require("express").Router();
const fs = require("fs").promises;
const path = require("path");

function getFile(file) {
  return fs.readFile(file, { encoding: "utf8" });
}

const getUser = (req, res) => {
  getFile(path.join(__dirname, "..", "data", "users.json"))
    .then((data) => {
      const newData = JSON.parse(data);
      const userInfo = newData.find((user) => user._id === req.params.id);
      if (!userInfo) {
        res.status(404).send({ message: "Нет пользователя с таким id" });
      } else {
        res.status(200).send(userInfo);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getAllUsers = (req, res) => {
  getFile(path.join(__dirname, "..", "data", "users.json"))
    .then((data) => {
      const users = JSON.parse(data);
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

router.get("/users/:id", getUser);
router.get("/users", getAllUsers);

module.exports = router;
