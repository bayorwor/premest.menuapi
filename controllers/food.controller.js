const foodModel = require("../models/food.model");

//create a new food
exports.create = (req, res) => {
  const newFood = new foodModel({
    name: req.body.name,
    type: req.body.type,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  });
  newFood.save((err, food) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: "Food successfully added",
      food,
    });
  });
};

//get all foods
exports.findAll = (req, res) => {
  foodModel.find((err, foods) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: "Foods successfully retrieved",
      foods,
    });
  });
};

//get a single food
exports.findOne = (req, res) => {
  foodModel.findById(req.params.foodId, (err, food) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: "Food successfully retrieved",
      food,
    });
  });
};

//update a food
exports.update = (req, res) => {
  foodModel.findOneAndUpdate(
    { _id: req.params.foodId },
    req.body,
    { new: true },
    (err, food) => {
      if (err) {
        res.send(err);
      }
      res.json({
        message: "Food successfully updated",
        food,
      });
    }
  );
};

//delete a food
exports.delete = (req, res) => {
  foodModel.remove(
    {
      _id: req.params.foodId,
    },
    (err, food) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Food successfully deleted" });
    }
  );
};
