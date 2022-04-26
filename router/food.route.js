const {
  create: createFood,
  findAll: getMenu,
  findOne,
  delete: deleteFood,
} = require("../controllers/food.controller");
const { protect, admin } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.route("/").post(protect, admin, createFood).get(protect, getMenu);

// router
//   .post("/",protect, create)
//   .get("/",protect, findAll)
//   .get("/:foodId",pro findOne)
//   .delete("/:foodId", deleteFood);

module.exports = router;
