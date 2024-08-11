const { prisma } = require("../config/prismaInit");

const createUser = async (data) => {
  try {
    return await prisma.user.create({ data });
  } catch (error) {
    throw new Error(`Gagal membuat user: ${error.message}`);
  }
};

const getUserByEmail = async (email) => {
  try {
    return await prisma.user.findFirst({
      where: { email },
      include: { orders: true, reviews: true },
    });
  } catch (error) {
    throw new Error(`Gagal mendapatkan user berdasarkan email: ${error.message}`);
  }
};

const updateUser = async (id, data) => {
  try {
    return await prisma.user.update({ where: { id }, data });
  } catch (error) {
    throw new Error(`Gagal mengupdate user: ${error.message}`);
  }
};

const getUserById = async (id) => {
  try {
    return await prisma.user.findUnique({ where: { id } });
  } catch (error) {
    throw new Error(`Gagal mendapatkan user berdasarkan id: ${error.message}`);
  }
};

const getAllUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw new Error(`Gagal mendapatkan semua user: ${error.message}`);
  }
};

const deleteUser = async (id) => {
  try {
    return await prisma.user.delete({ where: { id: id } });
  } catch (error) {
    throw new Error(`Gagal menghapus user: ${error.message}`);
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  updateUser,
  getUserById,
  getAllUsers,
  deleteUser,
};
