const { prisma } = require("../config/prismaInit");

const getAllProducts = async () => {
  try {
    return await prisma.product.findMany({
      include: {
        categories: {
          select: {
            category: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    throw new Error("Gagal mendapatkan semua produk: " + error.message);
  }
};

const getProductById = async (id) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        reviews: {
          include: {
            user: true,
            order: true,
          },
        },
        categories: {
          select: {
            categoryId: true,
            category: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return product;
  } catch (error) {
    throw new Error(
      "Gagal mendapatkan produk berdasarkan id: " + error.message
    );
  }
};

const createProduct = async (data) => {
  try {
    const { categories, ...productData } = data;

    let createData = {
      ...productData,
    };

    if (Array.isArray(categories) && categories.length > 0) {
      createData.categories = {
        create: categories.map((categoryId) => ({
          category: {
            connect: { id: categoryId },
          },
        })),
      };
    } else if (categories) {
      createData.categories = {
        create: {
          category: {
            connect: { id: categories },
          },
        },
      };
    }

    const newProduct = await prisma.product.create({
      data: createData,
    });

    return newProduct;
  } catch (error) {
    throw new Error("Gagal membuat produk: " + error.message);
  }
};

const updateProduct = async (id, data) => {
  try {
    const { categories, ...productData } = data;

    let updateData = {
      ...productData,
      categories: {
        deleteMany: {},
      },
    };

    if (Array.isArray(categories) && categories.length > 0) {
      updateData.categories.create = categories.map((categoryId) => ({
        category: {
          connect: { id: categoryId },
        },
      }));
    } else if (categories) {
      updateData.categories.create = {
        category: {
          connect: { id: categories },
        },
      };
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: updateData,
    });
    return updatedProduct;
  } catch (error) {
    throw new Error("Gagal mengupdate produk: " + error.message);
  }
};

const deleteProduct = async (id) => {
  try {
    await prisma.product.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error("Gagal menghapus produk: " + error.message);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
