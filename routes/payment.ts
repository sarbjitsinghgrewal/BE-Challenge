import express from "express";
const router = express.Router();
const { addPayment } = require("../controller/payment");

router.post("/add", addPayment);

module.exports = router;
