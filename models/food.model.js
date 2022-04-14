const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const foodModel = model(
  "Food",
  new Schema(
    {
      name: String,
      type: String,
      time: {
        type: Date,
        default: Date.now(),
      },
      ingredients: [String],
      instructions: [String],
    },
    {
      timestamps: true,
    }
  )
);

module.exports = foodModel;
