const router = require("express").Router();
const {
  getUser,
  getAllUsers,
  postUser,
  updateUser,
  updateAvatar,
} = require("../controllers/users");

router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.post("/users", postUser);
router.patch("/users/me", updateUser);
router.patch("/users/me/avatar", updateAvatar);

module.exports = router;
