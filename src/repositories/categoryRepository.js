const { prisma } = require("../config/prismaInit");

const createCategory = async (data) => {
  try {
    return await prisma.category.create({ data });
  } catch (error) {
    throw new Error(`Gagal membuat kategori: ${error.message}`);
  }
};
const getCategoryById = async (id) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id },
      include: { productCategories: { select: { product: true } } },
    });
    if (!category) {
      throw new Error(`Kategori dengan id ${id} tidak ditemukan`);
    }
    return category;
  } catch (error) {
    throw new Error(`Gagal mendapatkan kategori: ${error.message}`);
  }
};

const getCategories = async () => {
  try {
    return await prisma.category.findMany({
      include: {
        productCategories: {
          select: {
            product: true,
          },
        },
      },
    });
  } catch (error) {
    throw new Error(`Gagal mendapatkan kategori: ${error.message}`);
  }
};

const updateCategory = async (id, data) => {
  try {
    return await prisma.category.update({ where: { id }, data });
  } catch (error) {
    throw new Error(`Gagal mengupdate kategori: ${error.message}`);
  }
};

const deleteCategory = async (id) => {
  try {
    return await prisma.category.delete({ where: { id } });
  } catch (error) {
    throw new Error(`Gagal menghapus kategori: ${error.message}`);
  }
};

module.exports = {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
};
