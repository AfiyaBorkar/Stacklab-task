const express = require("express");
const router = express.Router();

const {
  addUser,
  fetchUsers,
  fetchUserById,
  updateUser,
  deleteUser,
} = require("../controller/userController");

router.post("/user", addUser);
router.route("/user").get(fetchUsers);
router.route("/user/:id").get(fetchUserById);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").delete(deleteUser);

module.exports = router;
