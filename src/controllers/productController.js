const productService = require("../services/productService");
const handleResponse = require("../utils/handleResponse");

const createProduct = (req, res) => {
  const data = req.body;
  const file = req.file;
  handleResponse(
    res,
    productService.createProduct(data, file),
    "Buat produk baru",
    201
  );
};

const getProductById = (req, res) => {
  const { id } = req.params;
  handleResponse(
    res,
    productService.getProductById(id),
    "Ambil produk berdasarkan Id"
  );
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const file = req.file;
  handleResponse(
    res,
    productService.updateProduct(id, data, file),
    "Perbarui produk"
  );
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  handleResponse(
    res,
    productService.deleteProduct(id),
    "Hapus produk"
  );
};

const getAllProducts = (req, res) => {
  handleResponse(
    res,
    productService.getAllProducts(),
    "Ambil semua produk"
  );
};

module.exports = {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllProducts,
};