const express = require("express");
const { UserModel } = require("../models/user.model");
const ProductRoutes = express.Router();
const jwt = require("jsonwebtoken");
const { Authmiddleware } = require("../middleware/Auth");

ProductRoutes.get("/products", (req, res) => {
  res.send("productspage");
});

ProductRoutes.get("/home", (req, res) => {
  res.send("homepage");
});

ProductRoutes.get("/orders", Authmiddleware, (req, res) => {
  res.status(200).json({ msg: "orderspage" });
});

ProductRoutes.get("/profile", Authmiddleware, (req, res) => {
  res.status(200).json({ msg: "this is your profile" });
});

module.exports = { ProductRoutes };
