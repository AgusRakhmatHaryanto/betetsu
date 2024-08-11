const reviewController = require("../../controllers/reviewController");
const express = require("express");
const router = express.Router();
//mendapatkan semua review
router.get("/", reviewController.getAllReviews);
//mendapatkan review berdasarkan id
router.get("/:id", reviewController.getReviewById);
//mendapatkan review berdasarkan id produk
router.get("/product/:id", reviewController.getAllReviewByProductId);
//membuat review
router.post("/", reviewController.createReview);
//mengubah review
router.put("/:id", reviewController.updateReview);
//menghapus review
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
