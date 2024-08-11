const { prisma } = require("../config/prismaInit");

const createOrderItem = async (data) => {
  try {
    return await prisma.orderItem.create({ data });
  } catch (error) {
    throw new Error(`Gagal membuat item order: ${error.message}`);
  }
};

const getOrderItemsByOrderId = async (orderId) => {
  try {
    return await prisma.orderItem.findMany({
      where: { orderId },
      include: { product: true },
    });
  } catch (error) {
    throw new Error(`Gagal mendapatkan item order: ${error.message}`);
  }
};

const updateOrderItem = async (id, data) => {
  try {
    const { orderId, ...validData } = data;
    return await prisma.orderItem.update({
      where: { id },
      data: validData,
    });
  } catch (error) {
    throw new Error(`Could not update order item: ${error.message}`);
  }
};

const deleteOrderItem = async (id) => {
  try {
    return await prisma.orderItem.delete({ where: { id } });
  } catch (error) {
    throw new Error(`Gagal menghapus item order: ${error.message}`);
  }
};

module.exports = {
  createOrderItem,
  getOrderItemsByOrderId,
  updateOrderItem,
  deleteOrderItem,
};
