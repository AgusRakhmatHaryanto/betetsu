const { prisma } = require("../config/prismaInit");

const getAllProgress = async () => {
  try {
    const progress = await prisma.progress.findMany();
    return progress;
  } catch (error) {
    throw new Error("Gagal mendapatkan semua progress: " + error.message);
  }
};

const getProgressById = async (id) => {
  try {
    const progress = await prisma.progress.findUnique({
      where: { id },
    });
    return progress;
  } catch (error) {
    throw new Error(
      "Gagal mendapatkan progress berdasarkan id: " + error.message
    );
  }
};

const getProgressByOrderItemId = async (orderItemId) => {
  try {
    const progress = await prisma.progress.findMany({
      where: { orderItemId },
    });
    return progress;
  } catch (error) {
    throw new Error(
      "Gagal mendapatkan progress berdasarkan item order: " + error.message
    );
  }
};

const createProgress = async (data, orderItemId) => {
  try {
    const newProgress = await prisma.progress.create({
      data:{
        description: data.description,
        orderItemId: orderItemId,
      }
    });
    return newProgress;
  } catch (error) {
    throw new Error("Gagal membuat progress: " + error.message);
  }
};

const updateProgress = async (id, data) => {
  try {
    const updatedProgress = await prisma.progress.update({
      where: { id },
      data,
    });
    return updatedProgress;
  } catch (error) {
    throw new Error("Gagal mengupdate progress: " + error.message);
  }
};

const deleteProgress = async (id) => {
  try {
    await prisma.progress.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error("Gagal menghapus progress: " + error.message);
  }
};

module.exports = {
  getAllProgress,
  getProgressById,
  getProgressByOrderItemId,
  createProgress,
  updateProgress,
  deleteProgress,
};
