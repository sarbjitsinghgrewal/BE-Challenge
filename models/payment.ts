import mongoose from "mongoose";

//usually we don't save Card info if we use services like Stripe
const paymentSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    userId: { type: String, required: true },
    cardNo: {
      type: Number,
      required: true, //
    },
    expiryDate: {
      type: String,
      required: true,
    },
    CVCNo: {
      type: Number,
      required: true,
      min: [3, "cvc Number must only contain 3 digit 123"],
    },
    amount: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["success", "fail"],
      default: "fail",
    },
    paymentMethod: {
      type: String,
      trim: true,
      default: "Card",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
