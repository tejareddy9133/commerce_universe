const jwt = require("jsonwebtoken");

const Authmiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  jwt.verify(token, "cleancode", function (err, decoded) {
    if (err) {
      res.status(400).json({ msg: "your token has expired" });
    }
    console.log(decoded);
    next();
  });
};

module.exports = { Authmiddleware };
