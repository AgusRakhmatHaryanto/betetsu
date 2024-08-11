const { verifyToken } = require('../utils/jwt');

const authorize = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Akses Token Diperlukan' });
    }

    try {
      const decoded = await verifyToken(token);
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Tidak Memiliki Hak Akses' });
      }
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Data Token Tidak Valid' });
    }
  };
};

module.exports = authorize;
