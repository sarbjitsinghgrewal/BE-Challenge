import { Request, Response, NextFunction } from "express";
const Product = require("../models/products.ts");

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error: any) {
    res.status(400).json({ error: true, message: error.message });
  }
};
