const categoryService = require("../services/categoryService");
const handleResponse = require("../utils/handleResponse");

const getAllCategories = (req, res) => {
  handleResponse(res, categoryService.getAllCategories(), "Get all category");
};
const createCategory = (req, res) => {
  const data = req.body;
  handleResponse(
    res,
    categoryService.createCategory(data),
    "Create category",
    201
  );
};

const getCategoryById = (req, res) => {
  const { id } = req.params;
  handleResponse(
    res,
    categoryService.getCategoryById(id),
    "Get category by Id"
  );
};

const updateCategory = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  handleResponse(
    res,
    categoryService.updateCategory(id, data),
    "Update category"
  );
};

const deleteCategory = (req, res) => {
  const { id } = req.params;
  handleResponse(res, categoryService.deleteCategory(id), "Delete category");
};

module.exports = {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
