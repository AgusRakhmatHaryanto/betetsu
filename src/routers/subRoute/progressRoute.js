const express = require('express');
const router = express.Router();
const progressController = require('../../controllers/progressController');
// const authMiddleware = require('../../middlewares/authMiddleware');

// Rute publik (jika ada)
//mendapatkan semua progress
router.get('/', progressController.getAllProgress);
//mendapatkan progress berdasarkan id
router.get('/:id', progressController.getProgressById);

// Rute yang memerlukan autentikasi
// router.use(authMiddleware);
//membuat progress
router.post('/order-item/:orderItemId', progressController.createProgress);
//mengubah progress
router.put('/:id', progressController.updateProgress);
//menghapus progress
router.delete('/:id', progressController.deleteProgress);
//mendapatkan progress berdasarkan id order item
router.get('/order-item/:orderItemId', progressController.getProgressByOrderItemId);

module.exports = router;
