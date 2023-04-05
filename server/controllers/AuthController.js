const express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator/check");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const User = require("../models/User");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      let user = new User({
        email: req.body.email,
        password: hashedPass,
        role: req.body.role,
      });
      user
        .save()
        .then((user) => {
          res.json({
            message: "User added successfully",
          });
        })
        .catch((error) => {
          res.json({
            message: "An error occured",
          });
        });
    }
  });
};

const login = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ $or: [{ username: username }, { email: username }] }).then(
    (user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            let token = jwt.sign({ username: user.username }, "secretValue", {
              expiresIn: "1h",
            });
            res.json({
              message: "Login succesful",
              token: token,
            });
          } else {
            res.json({
              message: "Password does not match",
            });
          }
        });
      } else {
        res.json({
          message: "No user found",
        });
      }
    }
  );
};

const user_update = async (req, res) => {
  const { username, fullname, email, role, mobile, phone, website } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        username,
        fullname,
        email,
        role,
        mobile,
        phone,
        website,
      },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const user_delete = (req, res, next) => {
  User.remove({ password: req.params.password })
    .exec()
    .then((result) => {
      res.status(200).json({ message: "Account deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

module.exports = { register, login, user_update, user_delete };
