const express = require('express');
const router = express.Router();
const orderItemsController = require('../../controllers/oderItemsController');

// Membuat item pesanan baru
router.post('/', orderItemsController.createOrderItem);

// Mendapatkan semua item pesanan berdasarkan orderId
router.get('/order/:orderId', orderItemsController.getOrderItems);

// Memperbarui item pesanan berdasarkan ID
router.put('/:id', orderItemsController.updateOrderItem);

// Menghapus item pesanan berdasarkan ID
router.delete('/:id', orderItemsController.deleteOrderItem);

module.exports = router;
