const progressService = require("../services/progressService");
const handleResponse = require("../utils/handleResponse");

const createProgress = (req, res) => {
  const {orderItemId} = req.params
  const data = req.body;
  handleResponse(
    res,
    progressService.createProgress(data, orderItemId),
    "Buat progress",
    201
  );
};

const getProgressById = (req, res) => {
  const { id } = req.params;
  handleResponse(
    res,
    progressService.getProgressById(id),
    "Ambil progress berdasarkan Id"
  );
};

const updateProgress = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  handleResponse(
    res,
    progressService.updateProgress(id, data),
    "Perbarui progress"
  );
};

const deleteProgress = (req, res) => {
  const { id } = req.params;
  handleResponse(res, progressService.deleteProgress(id), "Hapus progress");
};

const getAllProgress = (req, res) => {
  handleResponse(res, progressService.getAllProgress(), "Ambil semua progress");
};

const getProgressByOrderItemId = (req, res) => {
  const { orderItemId } = req.params;
  handleResponse(
    res,
    progressService.getProgressByOrderItemId(orderItemId),
    "Ambil progress berdasarkan OrderItemId"
  );
};

module.exports = {
  createProgress,
  getProgressById,
  updateProgress,
  deleteProgress,
  getAllProgress,
  getProgressByOrderItemId,
};