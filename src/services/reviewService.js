
const reviewRepository = require("../repositories/reviewRepository");

const getAllReviews = async () => {
  try {
    const reviews = await reviewRepository.getAllReviews();
    if(!reviews){
      throw new Error("Review tidak ditemukan");
    }
    return reviews;
  } catch (error) {
    console.log(error)
    throw new Error(`Error mendapatkan semua review: ${error.message}`);
  }
};

const getReviewById = async (id) => {
  try {
    const review = await reviewRepository.getReviewById(id);
    if(!review){
      throw new Error(`Review dengan ID ${id} tidak ditemukan`);
    }
    return review;
  } catch (error) {
    throw new Error(
      console.log(error),
      `Error mendapatkan review berdasarkan id: ${error.message}`
    );
  }
};

const createReview = async (reviewData) => {
  try {
    if(reviewData.rating){
      reviewData.rating = parseInt(reviewData.rating);
    }
    const review = await reviewRepository.createReview(reviewData);
    if(!review){
      throw new Error("Gagal membuat review");
    }
    return review;
  } catch (error) {
    console.log(error)
    throw new Error(`Error membuat review: ${error.message}`);
  }
};

const updateReview = async (id, reviewData) => {
  try {
    if(reviewData.rating){
      reviewData.rating = parseInt(reviewData.rating);
    }
    const review = await reviewRepository.updateReview(id, reviewData);
    if(!review){
      throw new Error("Gagal mengupdate review");
    }
    return review;
  } catch (error) {
    console.log(error)
    throw new Error(`Error mengupdate review: ${error.message}`);
  }
};

const deleteReview = async (id) => {
  try {
    const getReview = await reviewRepository.getReviewById(id);
    if(!review){
      throw new Error(`Review dengan ID ${id} tidak ditemukan`);
    }
    const review = await reviewRepository.delete(id);
    if(!review){
      throw new Error("Gagal menghapus review");
    }
    return review;
  } catch (error) {
    console.log(error)
    throw new Error(`Error menghapus review: ${error.message}`);
  }
};

const getAllReviewByProductId = async (productId) => {
  try {
    const reviews = await reviewRepository.getAllReviewByProduct(productId);
    if(!reviews){
      throw new Error(`Review untuk produk dengan ID ${productId} tidak ditemukan`);
    }
    return reviews;
  } catch (error) {
    console.log(error)
    throw new Error(
      `Error mendapatkan semua review berdasarkan product id: ${error.message}`
    );
  }
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  getAllReviewByProductId,
};
