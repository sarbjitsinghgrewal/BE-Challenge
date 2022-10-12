const Payment = require("../models/payment");
import { Request, Response, NextFunction } from "express";
const Order = require("../models/order");
const Cart = require("../models/cart");
const Products = require("../models/products");
const { v4: uuidv4 } = require("uuid");

interface paymentType {
  cardNo: number;
  userId: string | number;
  expiryDate: string;
  CVCNo: number;
  amount: number;
  status: string;
  paymentMethod: string;
}
interface orderType {
  userId: string | number;
  productId: any;
  quantity: number;
  total: number;
}
//proceeding to checkout
const addPayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userID: number = uuidv4();
    const { cartId, status, cardNo, expiryDate, CVCNo } = req.body;

    const findCart: any = await Cart.findById(cartId);

    if (!findCart) {
      return res.status(404).json({
        error: true,
        message:
          "Please select an existing cart Id before proceeding to payment",
      });
    }
    if (status === "fail") {
      return res.status(404).json({
        error: true,
        message:
          "Something is wrong. Please try again. Check your payment detail",
      });
    }

    findCart.items.forEach(async function (item: any) {
      let saveOrder: orderType = {
        userId: userID,
        productId: item.productId,
        quantity: item.quantity,
        total: item.price * item.quantity,
      };

      await Order.create(saveOrder);
      await Products.findOneAndUpdate(
        { _id: item.productId },
        { $inc: { quantity: -item.quantity } },
        { new: true }
      );
    });
    let saveData: paymentType = {
      cardNo: cardNo,
      userId: userID,
      expiryDate: expiryDate,
      CVCNo: CVCNo,
      amount: findCart.total,
      status: status,
      paymentMethod: "card",
    };

    const savePayment = await Payment.create(saveData);

    res.status(200).json({
      error: true,
      message: "Congratulation you have completed the payment process",
      data: savePayment,
    });
  } catch (error: any) {
    res.status(400).json({ error: true, message: error.message });
  }
};

module.exports = { addPayment };
