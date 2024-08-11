const orderRepository = require("../repositories/orderRepository");
const { prisma } = require("../config/prismaInit");

const getAllOrders = async () => {
  try {
    const orders = await orderRepository.getAllOrder();
    if (!orders) {
      throw new Error("Pesanan tidak ditemukan");
    }
    return orders;
  } catch (error) {
    console.log(error);
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
    console.log(error);
    throw new Error(`Error mendapatkan pesanan: ${error.message}`);
  }
};

const getOrderByUserId = async (id) => {
  try {
    const order = await orderRepository.getOrderByUser(id);
    if (!order) {
      throw new Error(`Pesanan untuk user ID ${id} tidak ditemukan`);
    }
    return order;
  } catch (error) {
    console.log(error);
    throw new Error(
      `Error mendapatkan pesanan untuk user ID ${id}: ${error.message}`
    );
  }
};

const updateOrder= async(id, orderData)=>{
  try{
    if(orderData.totalPrice){
      const orderPrice= parseFloat(orderData.totalPrice)
      orderData.totalPrice=orderPrice
    }
    const order= await orderRepository.updateOrder(id, orderData)
    if(!order){
      throw new Error("Gagal memperbarui pesanan")
    }
    return order
  }catch(error){
    console.log(error)
    throw new Error(`Gagal memperbarui pesanan: ${error.message}`)
  }
}

const createOrder = async (orderData) => {
  try {
   
    const { items, userId, ...orderDetails } = orderData;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error(`User dengan ID ${userId} tidak ditemukan`);
    }

    const orderItems = await Promise.all(
      items.map(async (item) => {
        const product = await prisma.product.findUnique({
          where: { id: item.productId },
        });

        if (!product) {
          throw new Error(`Produk dengan ID ${item.productId} tidak ditemukan`);
        }

        return {
          productId: item.productId,
          size: parseFloat(item.size) || 0,
          price: product.price || 0,
        };
      })
    );

    let totalPrice = orderItems.reduce((sum, item) => sum + (item.price*item.size), 0);

    const order = await orderRepository.createOrder({
      ...orderDetails,
      userId,
      totalPrice: parseFloat(totalPrice),
      items: {
        create: orderItems,
      },
    });

    if (!order) {
      throw new Error("Gagal membuat pesanan");
    }
    return order;
  } catch (error) {
    console.log(error);
    throw new Error(`Gagal membuat pesanan: ${error.message}`);
  }
};

const updateOrderStatus = async (id, status) => {
  try {
    const order = await orderRepository.updateOrderStatus(id,  status);
    if (!order) {
      throw new Error("Gagal memperbarui status pesanan");
    }
    return order;
  } catch (error) {
    console.log(error);
    throw new Error(`Gagal memperbarui status pesanan: ${error.message}`);
  }
};

const deleteOrder = async (id) => {
  try {
    const order = await orderRepository.deleteOrder(id);
    if (!order) {
      throw new Error("Gagal menghapus pesanan");
    }
    return order;
  } catch (error) {
    console.log(error);
    throw new Error(`Gagal menghapus pesanan: ${error.message}`);
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  getOrderByUserId,
  createOrder,
  updateOrderStatus,
  updateOrder,
  deleteOrder,
};
