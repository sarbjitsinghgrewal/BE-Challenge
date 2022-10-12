const Cart = require("../models/cart");
import { Request, Response, NextFunction } from "express";
const Product = require("../models/products.ts");

const addToCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { productId, quantity } = req.body;

    const findProduct: any = await Product.findById(productId);

    if (!findProduct) {
      return res
        .status(404)
        .json({ error: true, message: "Product does not exits" });
    }
    if (quantity > findProduct.quantity) {
      return res.status(400).json({ error: true, message: "Not Enough Stock" });
    }
    const price: number = findProduct.price;
    const title: string = findProduct.title;
    if (req.body?._id) {
      const cart = await Cart.findOne({ _id: req.body._id });

      if (!cart) {
        return res
          .status(404)
          .json({ error: true, message: "The cart does not exists" });
      }
      const productInCart = cart.items.findIndex(
        (item: any) => item.productId == productId
      );
      if (productInCart > -1) {
        let existProduct = cart.items[productInCart];
        existProduct.quantity = quantity;
        existProduct.price = price;
        existProduct.title = title;
        cart.total = cart.items.reduce((acc: any, curr: any) => {
          return acc + curr.quantity * curr.price;
        }, 0);
        cart.items[existProduct] = existProduct;
        await cart.save();

        return res.status(200).json({
          error: false,
          message: "cart updated successfully",
          data: cart,
        });
      }

      cart.items.push({ productId, title, quantity, price });
      cart.total = cart.items.reduce((acc: any, curr: any) => {
        return acc + curr.quantity * curr.price;
      }, 0);
      await cart.save();
      return res.status(200).json({
        error: false,
        message: "cart updated successfully with new Product",
        data: cart,
      });
    }

    const saveCart = await Cart.create({
      items: [{ productId, title, price, quantity }],
      total: price * quantity,
    });

    res.status(200).json({
      error: false,
      message: "Cart Save Successfully",
      data: saveCart,
    });
  } catch (error: any) {
    res.status(400).json({ error: true, message: error.message });
  }
};

module.exports = { addToCart };
