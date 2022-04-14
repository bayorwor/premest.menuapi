const {
  create,
  findAll,
  findOne,
  delete: deleteFood,
} = require("../controllers/food.controller");

const router = require("express").Router();

router
  .post("/", create)
  .get("/", findAll)
  .get("/:foodId", findOne)
  .delete("/:foodId", deleteFood);

module.exports = router;
