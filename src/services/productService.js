const productRepository = require("../repositories/productRepository");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../utils/cloudinaryHandler");

const createProduct = async (data, file) => {
  try {
    if (data.price) {
      data.price = parseFloat(data.price);
    }
    if (file) {
      const result = await uploadToCloudinary(file);
      data.coverImage = result.secure_url;
      data.imgId = result.public_id;
    }
    // Pastikan categories adalah array atau string
    if (data.categories && !Array.isArray(data.categories)) {
      data.categories = [data.categories];
    }
    const newProduct = await productRepository.createProduct(data);
    if (!newProduct) {
      throw new Error("Gagal membuat produk");
    }
    return newProduct;
  } catch (error) {
    console.log(error);
    throw new Error("Error membuat produk: " + error.message);
  }
};

const getAllProducts = async () => {
  try {
    const products = await productRepository.getAllProducts();
    if (!products) {
      throw new Error("Produk tidak ditemukan");
    }
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Error mendapatkan semua produk: " + error.message);
  }
};

const getProductById = async (id) => {
  try {
    const product = await productRepository.getProductById(id);
    if (!product) {
      throw new Error(`Produk dengan ID ${id} tidak ditemukan`);
    }
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Error mendapatkan produk dengan Id: " + error.message);
  }
};

const updateProduct = async (id, data, file) => {
  try {
    if (data.price) {
      data.price = parseFloat(data.price);
    }
    if (file) {
      const product = await productRepository.getProductById(id);
      if (product.imageUrl) {
        await deleteFromCloudinary(product.imgId);
      }
      const result = await uploadToCloudinary(file);
      data.coverImage = result.secure_url;
      data.imgId = result.public_id;
    }
    // Pastikan categories adalah array atau string
    if (data.categories && !Array.isArray(data.categories)) {
      data.categories = [data.categories];
    }
    const updatedProduct = await productRepository.updateProduct(id, data);
    if (!updatedProduct) {
      throw new Error("Gagal mengupdate produk");
    }
    return updatedProduct;
  } catch (error) {
    console.log(error);
    throw new Error("Error mengupdate produk: " + error.message);
  }
};

const deleteProduct = async (id) => {
  try {
    const product = await productRepository.getProductById(id);
    if (product.coverImage) {
      await deleteFromCloudinary(product.imgId);
    }
    const deletedProduct = await productRepository.deleteProduct(id);
    return deletedProduct;
  } catch (error) {
    console.log(error);
    throw new Error("Error menghapus produk: " + error.message);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
