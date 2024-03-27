const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Bearer TOKEN_VALUE
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decodedToken.userId };
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
