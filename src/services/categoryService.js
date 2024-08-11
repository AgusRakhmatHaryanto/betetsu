const categoryRepository = require("../repositories/categoryRepository");

const createCategory = async (data) => {
  try {
    const newCategory = await categoryRepository.createCategory(data);
    if(!newCategory){
      throw new Error("Gagal membuat kategori");
    }
    return newCategory;
  } catch (error) {
    console.log(error)
    throw new Error("Error membuat kategori: " + error.message);
    
  }
};

const getCategoryById = async (id) => {
  try {
    const category = await categoryRepository.getCategoryById(id);
    if(!category){
      throw new Error("Kategori tidak ditemukan");
    }
    return category;
  } catch (error) {
    console.log(error)
    throw new Error("Error mendapatkan kategori dengan Id: " + error.message);
  }
};

const getAllCategories = async () => {
  try {
    const categories = await categoryRepository.getCategories();
    if(!categories){
      throw new Error("Kategori tidak ditemukan");
    }
    return categories;
  } catch (error) {
    console.log(error)
    throw new Error("Error mendapatkan semua data kategori: " + error.message);
  }
};

const updateCategory = async (id, data) => {
  try {
    const updatedCategory = await categoryRepository.updateCategory(id, data);
    if(!updatedCategory){
      throw new Error("Gagal mengupdate kategori");
    }
    return updatedCategory;
  } catch (error) {
    console.log(error)
    throw new Error("Error mengupdate kategori: " + error.message);
  }
};

const deleteCategory = async (id) => {
  try {
    const deletedCategory = await categoryRepository.deleteCategory(id);
    if(!deletedCategory){
      throw new Error("Gagal menghapus kategori");
    }
    return deletedCategory;
  } catch (error) {
    console.log(error)
    throw new Error("Error menghapus kategori: " + error.message);
  }
};

module.exports = {
  createCategory,
  getCategoryById,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
