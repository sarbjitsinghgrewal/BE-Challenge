const Order = require("../models/order");
const { orderInterface } = require("../models/order");
import { Request, Response, NextFunction } from "express";
const Product = require("../models/products.ts");

const addOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _productId, quantity } = req.body;

    const findProduct: any = await Product.findById(_productId);

    if (!findProduct) {
      res.status(404).json({ error: true, message: "Product does not exits" });
    }

    const totalAmount = findProduct.price * quantity;
    req.body.total = totalAmount;

    const saveOrder = await Order.create(req.body);

    res.status(200).json({ error: true, message: "Order Save Successfully" });
  } catch (error: any) {
    res.status(400).json({ error: true, message: error.message });
  }
};
