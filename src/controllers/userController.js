const userService = require('../services/userService');
const handleResponse = require("../utils/handleResponse");


const createUser = (req, res) => {
  const file = req.file
  handleResponse(res, userService.create(req.body, file), 'Create user', 201);
};

const getUserById = (req, res) => {
  handleResponse(res, userService.getUserById(req.params.id), 'Get user by Id');
};

const getAllUsers = (req, res) => {
  handleResponse(res, userService.getAllUsers(), 'Get all user');
};

const updateUser = (req, res) => {
  const file = req.file
  handleResponse(res, userService.updateUser(req.params.id, req.body, file), 'Update user');
};

const updateUserByEmail = (req, res) => {
  handleResponse(res, userService.updateByEmail(req.params.email, req.body), 'Update user by email');
};

const deleteUser = (req, res) => {
  handleResponse(res, userService.deleteUser(req.params.id), 'Delete user');
};

const login = (req, res) => {
  const { email, password } = req.body;
  handleResponse(res, userService.login(email, password), 'Login user');
};

const getUserByEmail = (req, res) => {
  handleResponse(res, userService.getUserByEmail(req.params.email), 'Get user by email');
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  updateUserByEmail,
  deleteUser,
  login,
  getUserByEmail,
};