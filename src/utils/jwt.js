const jwt = require("jsonwebtoken");
require('dotenv').config();
const JWT_SECRET_ACCESS = process.env.JWT_SECRET_ACCESS;
const JWT_SECRET_REFRESH = process.env.JWT_SECRET_REFRESH;
const JWT_SECRET_ACCESS_VERIFY = process.env.JWT_SECRET_ACCESS_VERIFY;

async function generateToken(data) {
  const token = await jwt.sign(data, JWT_SECRET_ACCESS, {
    expiresIn: "1d",
  });
  return token;
}

async function generateVerifyToken(data) {
  const token = await jwt.sign(data, JWT_SECRET_ACCESS_VERIFY, {
    expiresIn: "5m",
  });
  return token;
}

async function generateRefreshToken(data) {
  const token = await jwt.sign(data, JWT_SECRET_REFRESH, {
    expiresIn: "3d",
  });
  return token;
}

async function verifyRefreshToken(token) {
  const decoded = await jwt.verify(token, JWT_SECRET_REFRESH);
  if (!decoded) {
    throw new Error("Authentication failed: Invalid token");
  }
  return decoded;
}

async function verifyEmailToken(token) {
  const decoded = await jwt.verify(token, JWT_SECRET_ACCESS_VERIFY);
  if (!decoded) {
    throw new Error("Authentication failed: Invalid token");
  }
  // console.log(decoded.email);
  return decoded;
}

async function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET_ACCESS, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return reject(new Error('Token telah kedaluwarsa'));
        }
        return reject(new Error('Token tidak valid'));
      }
      resolve(decoded);
    });
  });
}

module.exports = {
  generateToken,
  generateRefreshToken,
  verifyToken,
  generateVerifyToken,
  verifyEmailToken,
  verifyRefreshToken,
};