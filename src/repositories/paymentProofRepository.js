const { prisma } = require("../config/prismaInit");

const createPaymentProof = async (data) => {
  try {
    return await prisma.paymentProof.create({ data });
  } catch (error) {
    throw new Error(`Gagal membuat bukti pembayaran: ${error.message}`);
  }
};

const getPaymentProofById = async (id) => {
  try {
    return await prisma.paymentProof.findUnique({
      where: { id },
    });
  } catch (error) {
    throw new Error(
      `Gagal mendapatkan bukti pembayaran berdasarkan id: ${error.message}`
    );
  }
};

const updatePaymentProof = async (id, data) => {
  try {
    return await prisma.paymentProof.update({ where: { id }, data });
  } catch (error) {
    throw new Error(`Gagal mengupdate bukti pembayaran: ${error.message}`);
  }
};

const deletePaymentProof = async (id) => {
  try {
    return await prisma.paymentProof.delete({ where: { id } });
  } catch (error) {
    throw new Error(`Gagal menghapus bukti pembayaran: ${error.message}`);
  }
};

const getAllPaymentProof = async () => {
  try {
    return await prisma.paymentProof.findMany({ include: { order: true } });
  } catch (error) {
    throw new Error(
      `Gagal mendapatkan semua bukti pembayaran: ${error.message}`
    );
  }
};

const getPaymentProofByOrder = async (orderId) => {
  try {
    return await prisma.paymentProof.findMany({
      where: { orderId },
    });
  } catch (error) {
    throw new Error(
      `Gagal mendapatkan bukti pembayaran berdasarkan order: ${error.message}`
    );
  }
};

module.exports = {
  createPaymentProof,
  getPaymentProofById,
  updatePaymentProof,
  deletePaymentProof,
  getAllPaymentProof,
  getPaymentProofByOrder,
};
