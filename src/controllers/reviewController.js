const reviewService = require("../services/reviewService");
const handleResponse = require("../utils/handleResponse");

const getAllReviews = (req, res) => {
  handleResponse(res, reviewService.getAllReviews(), "Get all review");
};

const getReviewById = (req, res) => {
  const { id } = req.params;
  handleResponse(res, reviewService.getReviewById(id), "Get review by Id");
};
const createReview = (req, res) => {
  const reviewData = req.body;
  handleResponse(
    res,
    reviewService.createReview(reviewData),
    "Create review",
    201
  );
};

const updateReview = (req, res) => {
  const { id } = req.params;
  const reviewData = req.body;
  handleResponse(
    res,
    reviewService.updateReview(id, reviewData),
    "Update review"
  );
};

const deleteReview = (req, res) => {
  const { id } = req.params;
  handleResponse(res, reviewService.deleteReview(id), "Delete review");
};

const getAllReviewByProductId = (req, res) => {
  const { productId } = req.params;
  handleResponse(
    res,
    reviewService.getAllReviewByProductId(productId),
    "Get Review By Product Id"
  );
};
module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  getAllReviewByProductId
};
