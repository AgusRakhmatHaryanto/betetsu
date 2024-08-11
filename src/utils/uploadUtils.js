const multer = require('multer');

const storage = multer.memoryStorage(); 

const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpeg|png|jpg|jfif)$/)) {
    return cb(new Error('Please upload a photo (png/jpg/jfif)'));
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 } // 5MB limit
});

module.exports = upload;
