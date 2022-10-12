import express from "express";
const router = express.Router();
const { addToCart } = require("../controller/cartController");

router.post("/add", addToCart);

module.exports = router;
