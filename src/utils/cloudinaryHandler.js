const cloudinary = require("../config/cloudinaryConfig");

const uploadToCloudinary = async (file) => {
  return new Promise((resolve, reject) => {
    const fileNameWithoutExt = file.originalname
      .split(".")
      .slice(0, -1)
      .join(".")
      .replace(/\s+/g, '-');
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "payment_proofs",
        use_filename: true,
        public_id: Date.now() + "-" + fileNameWithoutExt,
      },
      (error, result) => {
        if (error) reject(new Error("Cloudinary upload error: " + error.message));
        resolve(result);
      }
    );
    uploadStream.end(file.buffer);
  });
};

const deleteFromCloudinary = async (publicId) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, (error, result) => {
      if (error) {
        reject(new Error("Cloudinary delete error: " + error.message));
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  uploadToCloudinary,
  deleteFromCloudinary
};