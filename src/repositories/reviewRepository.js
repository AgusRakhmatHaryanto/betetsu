const { prisma } = require("../config/prismaInit");

const getAllReviews = async () => {
  try {
    return await prisma.review.findMany();
  } catch (error) {
    throw new Error(`Gagal mendapatkan semua review: ${error.message}`);
  }
};

const getReviewById = async (id) => {
  try {
    return await prisma.review.findUnique({
      where: { id },
    });
  } catch (error) {
    throw new Error(
      `Gagal mendapatkan review berdasarkan id: ${error.message}`
    );
  }
};

const createReview = async (data) => {
  try {
    return await prisma.review.create({ data });
  } catch (error) {
    throw new Error(`Gagal membuat review: ${error.message}`);
  }
};

const updateReview = async (id, data) => {
  try {
    return await prisma.review.update({ where: { id }, data });
  } catch (error) {
    throw new Error(`Gagal mengupdate review: ${error.message}`);
  }
};

const getAllReviewByProduct = async (id) => {
  try {
    return await prisma.review.findMany({
      where: { productId: id },
      include: {
        user: true,
        order: true,
      },
    });
  } catch (error) {
    throw new Error(
      `Gagal mendapatkan semua review berdasarkan produk: ${error.message}`
    );
  }
};

const deleteReview = async (id) => {
  try {
    return await prisma.review.delete({ where: { id } });
  } catch (error) {
    throw new Error(`Gagal menghapus review: ${error.message}`);
  }
};
module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  getAllReviewByProduct,
  deleteReview,
};
