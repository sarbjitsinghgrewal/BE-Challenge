const mongoose = require("mongoose");

//------------------------Product Schema-----------------------------//
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: [2, "Product title must have atleast two characters!"],
    },
    description: {
      type: String,
      minLength: [2, "Product description must have atleast two characters!"],
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Product", productSchema);
