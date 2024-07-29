const express = require("express");
const { UserModel } = require("../models/user.model");
const UserRoutes = express.Router();
const bcrypt = require("bcrypt");
UserRoutes.post("/register", async (req, res) => {
  const { email, password, username } = req.body;
  try {
    if (req.body) {
      bcrypt.hash(password, 5, async function (err, hash) {
        if (err) {
          res.send(err.message);
        } else {
          let reg_user = new UserModel({ email, username, password: hash });
          reg_user.save();
          await res.status(200).json({ msg: "registered sucessfully" });
        }
      });
    } else {
      res.status(200).json({ msg: "user not found" });
    }
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

UserRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user.password) {
      console.log(user);
      res.status(200).json({ msg: "user login sucessfully" });
    } else {
      res.status(200).json({ msg: "Your Credentials are wrong" });
    }
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

module.exports = { UserRoutes };
