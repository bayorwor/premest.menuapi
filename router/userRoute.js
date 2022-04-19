const { Router } = require("express");
const router = Router();

const { createUser, loginUser } = require("../controllers/userController");

router.post("/users/register", createUser).post("/users/login", loginUser);

module.exports = router;
