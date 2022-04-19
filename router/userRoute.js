const { Router } = require("express");
const router = Router();

const { createUser } = require("../controllers/userController");

router.post("/users", createUser);

module.exports = router;
