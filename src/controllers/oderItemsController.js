const orderItemsService = require("../services/orderItemsService");
const handleResponse = require("../utils/handleResponse");

const createOrderItem = (req, res) => {
  const data = req.body;
  handleResponse(
    res,
    orderItemsService.createOrderItem(data),
    "Buat item pesanan",
    201
  );
};

const getOrderItems = (req, res) => {
  const { orderId } = req.params;
  handleResponse(
    res,
    orderItemsService.getOrderItem(orderId),
    "Ambil semua item pesanan"
  );
};

const updateOrderItem = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  handleResponse(
    res,
    orderItemsService.updateOrderItem(id, data),
    "Perbarui item pesanan"
  );
};

const deleteOrderItem = (req, res) => {
  const { id } = req.params;
  handleResponse(
    res,
    orderItemsService.deleteOrderItem(id),
    "Hapus item pesanan"
  );
};

module.exports = {
  createOrderItem,
  getOrderItems,
  updateOrderItem,
  deleteOrderItem
}