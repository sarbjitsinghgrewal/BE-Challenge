import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        price: Number,
        title: String,
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
      },
    ],

    total: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Creating the Collection from above schema
module.exports = mongoose.model("Cart", cartSchema);

export interface orderInterface {
  items: [];
  quantity: number;
  total: number;
}
