const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const authorize = require('../../middlewares/authorization');
const upload = require('../../utils/uploadUtils');



// Route untuk mendapatkan pengguna berdasarkan ID
router.get('/:id', userController.getUserById);

// Route untuk membuat pengguna baru
router.post('/', upload.single('photoProfile') ,userController.createUser);

// Route untuk memperbarui pengguna berdasarkan ID
router.put('/:id', upload.single('photoProfile'), userController.updateUser);

// Route untuk menghapus pengguna berdasarkan ID
router.delete('/:id', userController.deleteUser);

// Route untuk login
router.post('/login', userController.login);

// Route untuk mendapatkan pengguna berdasarkan email
router.get('/email/:email', userController.getUserByEmail);

// router.use(authorize(['admin']))
// Route untuk mendapatkan semua pengguna
router.get('/'  , userController.getAllUsers);

module.exports = router;