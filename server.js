const express = require("express");
require("dotenv").config();
const foodRouter = require("./router/food.route");
const userRouter = require("./router/userRoute");

const db = require("./utils/db");

db();

const app = express();

const PORT = process.env.PORT || 5000;

// app.use(express.static(__dirname, "public"));

app.use(express.json());
app.use("/api/foods", foodRouter);
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.sendFile("/views/index.html");
});

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});
