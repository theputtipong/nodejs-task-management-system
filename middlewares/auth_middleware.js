const jwt = require("jsonwebtoken");
const db = require("../models/index_model");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    const tokenRecord = await db.TokenBlacklist.findOne({ where: { token } });
    if (tokenRecord) {
      return res.status(401).json({ message: "Token has been revoked." });
    }

    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token." });
  }
};

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });

  jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, user) => {
    if (err)
      return res
        .status(403)
        .json({ message: "Forbidden. Insufficient privileges.", error: err });
    req.user = user;
    next();
  });
};

const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res
        .status(403)
        .json({ message: "Forbidden. Insufficient privileges." });
    }
    next();
  };
};

module.exports = { authMiddleware, authenticateToken, authorizeRole };
