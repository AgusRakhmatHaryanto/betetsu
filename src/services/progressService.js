const progressRepository = require("../repositories/progressRepository");

const createProgress = async (data, orderItemId) => {
  try {
    const progress = await progressRepository.createProgress(data, orderItemId);
    if(!progress){
      throw new Error("Gagal membuat progress");
    }
    return progress;
  } catch (error) {
    console.log(error)
    throw new Error(`Error membuat progress: ${error.message}`);
  }
};

const getProgressById = async (id) => {
  try {
    const progress = await progressRepository.getProgressById(id);
    if(!progress){
      throw new Error(`Progress dengan ID ${id} tidak ditemukan`);
    }
    return progress;
  } catch (error) {
    console.log(error)
    throw new Error(`Error mendapatkan progress dengan Id: ${error.message}`);
  }
};

const getAllProgress = async () => {
  try {
    const progress = await progressRepository.getAllProgress();
    if(!progress){
      throw new Error("Progress tidak ditemukan");
    }
    return progress;
  } catch (error) {
    console.log(error)
    throw new Error(`Error mendapatkan semua progress: ${error.message}`);
  }
};

const getProgressByOrderItemId = async (orderItemId) => {
  try {
    const progress = await progressRepository.getProgressByOrderItemId(orderItemId);
    if(!progress){
      throw new Error(`Progress untuk item pesanan dengan ID ${orderItemId} tidak ditemukan`);
    }
    return progress;
  } catch (error) {
    console.log(error)
    throw new Error(
      `Error mendapatkan progress berdasarkan order item Id: ${error.message}`
    );
  }
};

const updateProgress = async (id, data) => {
  try {
    const progress = await progressRepository.updateProgress(id, data);
    if(!progress){
      throw new Error("Gagal mengupdate progress");
    }
    return progress;
  } catch (error) {
    console.log(error)
    throw new Error(`Error mengupdate progress: ${error.message}`);
  }
};

const deleteProgress = async (id) => {
  try {
    const progress = await progressRepository.deleteProgress(id);

    return progress;
  } catch (error) {
    console.log(error)
    throw new Error(`Error menghapus progress: ${error.message}`);
  }
};

module.exports = {
  createProgress,
  getProgressById,
  getAllProgress,
  getProgressByOrderItemId,
  updateProgress,
  deleteProgress,
};
