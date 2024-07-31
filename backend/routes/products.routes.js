const express = require("express");
const { UserModel } = require("../models/user.model");
const ProductRoutes = express.Router();
const jwt = require("jsonwebtoken");
const { Authmiddleware } = require("../middleware/Auth");
const { ProductModel } = require("../models/product.model");

//get request
ProductRoutes.get("/", async (req, res) => {
  try {
    let data = await ProductModel.find();
    res.status(200).json({ msg: "data fetched sucessfully", data });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});
//post
ProductRoutes.post("/create", async (req, res) => {
  const data = req.body;
  try {
    const pd = await ProductModel(data);
    pd.save();
    res.status(200).json({ msg: "inserted new product sucessfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

//edit
ProductRoutes.patch("/edit/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const item = await ProductModel.findByIdAndUpdate(_id, req.body);
    res.status(200).json({ msg: "edited sucessfully", item });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = { ProductRoutes };
