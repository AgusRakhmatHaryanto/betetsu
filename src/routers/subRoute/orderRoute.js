const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/orderController');

//mendapatkan semua order
router.get('/', orderController.getAllOrders);
//mendapatkan order berdasarkan id
router.get('/:id', orderController.getOrderById);
//mendapatkan order berdasarkan id user
router.get('/user/:id', orderController.getOrderByUserId);
//membuat order
router.post('/', orderController.createOrder);
//mengubah order
router.put('/:id', orderController.updateOrder);
//mengubah status order
router.put('/:id/status', orderController.updateOrderStatus);
//menghapus order
router.delete('/:id', orderController.deleteOrder);

module.exports = router;