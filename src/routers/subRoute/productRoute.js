const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");
const upload = require("../../utils/uploadUtils");
const authorize = require('../../middlewares/authorization')

// Rute untuk mendapatkan semua produk
router.get("/", productController.getAllProducts);

// Rute untuk mendapatkan produk berdasarkan ID
router.get("/:id", productController.getProductById);


// Rute untuk membuat produk baru
router.post("/", upload.single("imageProduct"), productController.createProduct);

// Rute untuk memperbarui produk
router.put("/:id", upload.single("imageProduct"), productController.updateProduct);

// Rute untuk menghapus produk
router.delete("/:id", productController.deleteProduct);

module.exports = router;
