const paymentProofRepository = require("../repositories/paymentProofRepository");
const {
  deleteFromCloudinary,
  uploadToCloudinary,
} = require("../utils/cloudinaryHandler");

const createPaymentProof = async (data, file) => {
  try {
    if(data.amount){
      data.amount = parseFloat(data.amount)
    }
    if (file) {
      const result = await uploadToCloudinary(file);
      data.imageUrl = result.secure_url;
      data.imgId = result.public_id;
    }
    const paymentProof = await paymentProofRepository.createPaymentProof(data);
    if (!paymentProof) {
      throw new Error("Gagal membuat bukti pembayaran");
    }
    return paymentProof;
  } catch (error) {
    console.log(error)
    throw new Error(`Error membuat bukti pembayaran: ${error.message}`);
  }
};

const getPaymentProofById = async (id) => {
  try {
    const paymentProof = await paymentProofRepository.getPaymentProofById(id);
    if (!paymentProof) {
      throw new Error(`Bukti pembayaran dengan ID ${id} tidak ditemukan`);
    }
    return paymentProof;
  } catch (error) {
    console.log(error)
    throw new Error(
      `Error mendapatkan bukti pembayaran degan Id: ${error.message}`
    );
  }
};

const updatePaymentProof = async (id, data, file) => {
  try {
    if(data.amount){
      data.amount = parseFloat(data.amount)
    }
    if (file) {
      const paymentProof = await paymentProofRepository.getPaymentProofById(id);
      if (paymentProof.imageUrl) {
        await deleteFromCloudinary(paymentProof.imgId);
      }
      const result = await uploadToCloudinary(file);
      data.imageUrl = result.secure_url;
      data.imgId = result.public_id;
    }
    const paymentProof = await paymentProofRepository.updatePaymentProof(
      id,
      data
    );
    if (!paymentProof) {
      throw new Error("Gagal mengupdate bukti pembayaran");
    }
    return paymentProof;
  } catch (error) {
    console.log(error)
    throw new Error(`Error mengupdate bukti pembayaran: ${error.message}`);
  }
};

const deletePaymentProof = async (id) => {
  try {
    const paymentProof = await paymentProofRepository.deletePaymentProof(id);
    if(paymentProof.imageUrl){
      await deleteFromCloudinary(paymentProof.imgId);
    }
    return paymentProof;
  } catch (error) {
    console.log(error)
    throw new Error(`Error menghapus bukti pembayaran: ${error.message}`);
  }
};

const getPaymentProofs = async () => {
  try {
    const paymentProofs = await paymentProofRepository.getAllPaymentProof();
    if (!paymentProofs) {
      throw new Error("Bukti pembayaran tidak ditemukan");
    }
    return paymentProofs;
  } catch (error) {
    console.log(error)
    throw new Error(
      `Error mendapatkan bukti semua pembayaran: ${error.message}`
    );
  }
};

const getPaymentProofByOrder = async (orderId) => {
  try {
    const paymentProof = await paymentProofRepository.getPaymentProofByOrder(
      orderId
    );
    if (!paymentProof) {
      throw new Error(
        `Bukti pembayaran untuk pesanan dengan ID ${orderId} tidak ditemukan`
      );
    }
    return paymentProof;
  } catch (error) {
    console.log(error)
    throw new Error(
      `Error mendapatkan bukti pembayaran berdasarkan order: ${error.message}`
    );
  }
};

module.exports = {
  createPaymentProof,
  getPaymentProofById,
  updatePaymentProof,
  deletePaymentProof,
  getPaymentProofs,
  getPaymentProofByOrder,
};
