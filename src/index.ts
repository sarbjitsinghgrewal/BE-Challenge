import express, { Request, Response, NextFunction } from "express";
const Product = require("../models/products.ts");
const app = express();
import helmet from "helmet";
const connectDB = require("../config/DB");

const port: number = 5000;

connectDB();
app.use(helmet());
app.use(express.json());

//import routes
const cartRoute = require("../routes/cart");
const paymentRoute = require("../routes/payment");

app.use("/api/cart", cartRoute);
app.use("/api/payment", paymentRoute);

function initial() {
  Product.estimatedDocumentCount((err: any, count: number) => {
    if (!err && count === 0) {
      Product.create([
        {
          title: "Shirt",
          description: "This is a T Shirt",
          quantity: 25,
          price: 250,
        },
        {
          title: "Jean",
          description: "This is a Jean",
          quantity: 30,
          price: 700,
        },
        {
          title: "Sweater",
          description: "This is a Sweater",
          quantity: 40,
          price: 400,
        },
        {
          title: "monitor",
          description: "This is a Monitor",
          quantity: 60,
          price: 4000,
        },
        {
          title: "CPU",
          description: "This is a CPU",
          quantity: 70,
          price: 20000,
        },
        {
          title: "Keyboard",
          description: "This is a Keyboard",
          quantity: 10,
          price: 800,
        },
        {
          title: "Mouse",
          description: "This is a Mouse",
          quantity: 50,
          price: 400,
        },
        {
          title: "UPS",
          description: "This is a UPS",
          quantity: 10,
          price: 900,
        },
        {
          title: "SSD",
          description: "This is an SSD",
          quantity: 100,
          price: 2000,
        },
        {
          title: "Pendrive",
          description: "This is a Pendrive",
          quantity: 99,
          price: 600,
        },
      ]);
    }
  });
}

initial();
app.listen(port, () => console.log("Server up and running " + port));
