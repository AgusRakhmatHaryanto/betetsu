const express = require('express');
const router = express.Router();
const paymentProofController = require('../../controllers/paymentProofController');
const upload = require('../../utils/uploadUtils');

//membuat payment proof
router.post('/', upload.single('paymentImage'), paymentProofController.createPaymentProof);
//mendapatkan payment proof berdasarkan id
router.get('/:id', paymentProofController.getPaymentProofById);
//mengubah payment proof
router.put('/:id', upload.single('paymentImage'), paymentProofController.updatePaymentProof);
//menghapus payment proof
router.delete('/:id', paymentProofController.deletePaymentProof);
//mendapatkan semua payment proof
router.get('/', paymentProofController.getPaymentProofs);

module.exports = router;
