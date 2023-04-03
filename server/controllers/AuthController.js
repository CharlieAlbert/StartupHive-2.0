const express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator/check");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const User = require("../models/User");
const UserProfile = require("../models/UserProfile");

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
              token,
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

const profile = async (req, res, next) => {
  try {
    const user_profile = new UserProfile({
      username: req.body.username,
      fullname: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      mobile: req.body.mobile,
      address: req.body.address,
      role: req.body.role,
      website: req.body.website,
    });

    await user_profile.save();
    res.send("Profile added successfully");
  } catch (err) {
    res.send("Profile not added");
  }
};

const user_update = (req, res, next) => {
  const id = req.params.userId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid user id",
    });
  }

  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      res.status(200).json({
        message: "Profile updated successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
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

module.exports = { register, login, profile, user_update, user_delete };
