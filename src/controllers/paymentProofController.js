const paymentProofService = require("../services/paymentProofService");
const handleResponse = require("../utils/handleResponse");

const createPaymentProof = (req, res) => {
  const data = req.body;
  const file = req.file;
  handleResponse(
    res,
    paymentProofService.createPaymentProof(data, file),
    "Buat bukti pembayaran",
    201
  );
};

const getPaymentProofById = (req, res) => {
  const { id } = req.params;
  handleResponse(
    res,
    paymentProofService.getPaymentProofById(id),
    "Ambil bukti pembayaran berdasarkan Id"
  );
};

const updatePaymentProof = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const file = req.file;
  handleResponse(
    res,
    paymentProofService.updatePaymentProof(id, data, file),
    "Perbarui bukti pembayaran"
  );
};

const deletePaymentProof = (req, res) => {
  const { id } = req.params;
  handleResponse(
    res,
    paymentProofService.deletePaymentProof(id),
    "Hapus bukti pembayaran"
  );
};

const getPaymentProofs = (req, res) => {
  handleResponse(
    res,
    paymentProofService.getPaymentProofs(),
    "Ambil semua bukti pembayaran"
  );
};

module.exports = {
  createPaymentProof,
  getPaymentProofById,
  updatePaymentProof,
  deletePaymentProof,
  getPaymentProofs,
};