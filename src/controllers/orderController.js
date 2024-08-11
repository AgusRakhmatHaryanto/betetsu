const orderService = require("../services/orderService");
const handleResponse = require("../utils/handleResponse");

const getAllOrders = async (req, res) => {
  handleResponse(
    res,
    orderService.getAllOrders(),
    "Ambil Semua Dara Order",
    200
  );
};

const getOrderById = (req, res) => {
  const { id } = req.params;
  handleResponse(
    res,
    orderService.getOrderById(id),
    "Ambil Data Order Berdasarkan ID",
    200
  );
};

const getOrderByUserId = (req, res) => {
  const { id } = req.params;
  handleResponse(
    res,
    orderService.getOrderByUserId(id),
    "Ambil Data Order Berdasarkan ID User",
    200
  );
};

const createOrder = async (req, res) => {
  const data = req.body;
  handleResponse(res, orderService.createOrder(data), "Buat Data Order", 201);
};
const updateOrder = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  handleResponse(res, orderService.updateOrder(id, data), "Update Data Order", 200);
};
const updateOrderStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  handleResponse(
    res,
    orderService.updateOrderStatus(id, status),
    "Update Status Order",
    200
  );
};

const deleteOrder = (req, res) => {
  const { id } = req.params;
  handleResponse(res, orderService.deleteOrder(id), "Hapus Data Order", 200);
};

module.exports = {
  getAllOrders,
  getOrderById,
  getOrderByUserId,
  createOrder,
  updateOrderStatus,
  updateOrder,
  deleteOrder,
};
