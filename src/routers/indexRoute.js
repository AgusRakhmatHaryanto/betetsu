
const userRoute = require("./subRoute/userRoute");
const productRoute = require("./subRoute/productRoute");
const orderRoute = require("./subRoute/orderRoute");
const orderItemRoute = require("./subRoute/orderItemRoute");
const reviewRoute = require("./subRoute/reviewRoute");
const categoryRoute = require("./subRoute/categoryRoute");
const progressRoute = require("./subRoute/progressRoute");
const paymentProofRoute = require("./subRoute/paymentProofRoute");
const express = require("express");
const router = express.Router();


router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/categories", categoryRoute);
router.use("/orders", orderRoute);
router.use("/reviews", reviewRoute);
router.use("/progress", progressRoute);
router.use("/order-item", orderItemRoute);
router.use("/payment-proof", paymentProofRoute);

module.exports = router;