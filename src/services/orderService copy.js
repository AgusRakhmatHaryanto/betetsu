const orderRepository = require("../repositories/orderRepository");
const { prisma } = require("../config/prismaInit");

const getAllOrders = async () => {
  try {
    const orders = await orderRepository.getAllOrder();
    if(!orders){
      throw new Error("Pesanan tidak ditemukan");
    }
    return orders;
  } catch (error) {
    console.log(error)
    throw new Error(`Error mendapatkan pesanan: ${error.message}`);
  }
};

const getOrderById = async (id) => {
  try {
    const order = await orderRepository.getOrderById(id);
    if (!order) {
      throw new Error(`Pesanan dengan ID ${id} tidak ditemukan`);
    }
    return order;
  } catch (error) {
    console.log(error)
    throw new Error(`Error mendapatkan pesanan: ${error.message}`);
  }
};

const getOrderByUserId = async (id) => {
  try {
    const order = await orderRepository.getOrderByUser(id);
    if(!order){
      throw new Error(`Pesanan untuk user ID ${id} tidak ditemukan`);
    }
    return order;
  } catch (error) {
    console.log(error)
    throw new Error(
      `Error mendapatkan pesanan untuk user ID ${id}: ${error.message}`
    );
  }
};

const createOrder = async (orderData) => {
  try {
   
    const { items, userId, ...orderDetails } = orderData;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error(`User dengan ID ${userId} tidak ditemukan`);
    }

    const orderItems = items.map(item => ({
      productId: item.productId,
      size: item.size || 0,
      price: item.price || 0,
    }));

    const totalPrice = orderItems.reduce((sum, item) => sum + item.price, 0);
    
      totalPrice = parseFloat(totalPrice);
    const order = await prisma.order.create({
      data: {
        ...orderDetails,
        userId,
        totalPrice,
        items: {
          create: orderItems,
        },
      },
      include: {
        items: true,
      },
    });
    if(!order){
      throw new Error("Gagal membuat pesanan");
    }
    return order;
  } catch (error) {
    console.log(error)
    throw new Error(`Gagal membuat pesanan: ${error.message}`);
  }
};

const updateOrderStatus = async (id, status) => {
  try {
    const order = await orderRepository.updateOrder(id, { status });
    if(!order){
      throw new Error("Gagal memperbarui status pesanan");
    }
    return order;
  } catch (error) {
    console.log(error)
    throw new Error(`Gagal memperbarui status pesanan: ${error.message}`);
  }
};

const deleteOrder = async (id) => {
  try {
    const order = await orderRepository.deleteOrder(id);
    if(!order){
      throw new Error("Gagal menghapus pesanan");
    }
    return order;
  } catch (error) {
    console.log(error)
    throw new Error(`Gagal menghapus pesanan: ${error.message}`);
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  getOrderByUserId,
  createOrder,
  updateOrderStatus,
  deleteOrder
};