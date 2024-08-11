const express = require('express');
const router = express.Router();
const categoryController= require('../../controllers/categoryController')

// Mendapatkan semua kategori
router.get('/', categoryController.getAllCategories);

// Mendapatkan kategori berdasarkan ID
router.get('/:id', categoryController.getCategoryById);

// Membuat kategori baru
router.post('/', categoryController.createCategory);

// Memperbarui kategori berdasarkan ID
router.put('/:id', categoryController.updateCategory);

// Menghapus kategori berdasarkan ID
router.delete('/:id', categoryController.deleteCategory);


module.exports = router;


