import mongoose from "mongoose";

//after purchase order
const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
    },

    quantity: Number,
    total: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Creating the Collection from above schema
module.exports = mongoose.model("Order", orderSchema);
