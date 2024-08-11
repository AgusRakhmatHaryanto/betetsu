const OrderItemsRepository = require('../repositories/orderItemsRepository');

const createOrderItem = async(orderItemData, orderId)=>{
    try {
        if(orderItemData.size){
            orderItemData.size = parseFloat(orderItemData.size)
        }
        if(orderItemData.price){
            orderItemData.price = parseFloat(orderItemData.price)
        }
        const orderItem = await OrderItemsRepository.createOrderItem(orderItemData, orderId)
        if(!orderItem){
            throw new Error("Gagal membuat item pesanan");
        }
        return orderItem;
    } catch (error) {
        console.log(error)
        throw new Error(`Error membuat item pesanan: ${error.message}`)
    }
}

const getOrderItem = async(orderId)=>{
    try {
        const orderItem = await OrderItemsRepository.getOrderItemsByOrderId(orderId)
        if(!orderItem){
            throw new Error("Item pesanan tidak ditemukan");
        }
        return orderItem;
    } catch (error) {
        console.log(error)
        throw new Error(`Error mendapatkan item pesanan: ${error.message}`)
    }
}

const updateOrderItem = async(id, data)=>{
    try {
        if(data.size){
            data.size = parseFloat(data.size)
        }
        if(data.price){
            data.price = parseFloat(data.price)
        }
        const orderItem = await OrderItemsRepository.updateOrderItem(id, data)
        if(!orderItem){
            throw new Error("Gagal mengupdate item pesanan");
        }
        return orderItem;
    } catch (error) {
        console.log(error)
        throw new Error(`Error mengupdate item pesanan: ${error.message}`)
    }
}

const deleteOrderItem = async(id)=>{
    try {
        const orderItem = await OrderItemsRepository.deleteOrderItem(id)
        if(!orderItem){
            throw new Error("Gagal menghapus item pesanan");
        }
        return orderItem;
    } catch (error) {
        console.log(error)
        throw new Error(`Error menghapus item pesanan: ${error.message}`)
    }
}

module.exports = {
    createOrderItem,
    getOrderItem,
    updateOrderItem,
    deleteOrderItem
}