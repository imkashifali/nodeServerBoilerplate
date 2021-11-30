const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.Controller");
const { check,body } = require("express-validator/check");
const UserLogin = require('../models/login')
const {validateUserLogin,userVlidation}=require ('../middleware/validation/user')

router.post("/login",validateUserLogin,userVlidation,userController.saveLoginUserInfo);

router.get("/getLogin", userController.getLoginUsers);




















// @route   GET /user
// @desc    user post route
// @access  Public
router.get("/", userController.getUsers);

// @route   GET /user
// @desc    user Search post route
// @access  Public
router.get("/:id", userController.getSingleUser);

// @route   Post /user
// @desc    Save Data In Database
// @access  Private
router.post("/", userController.saveUserInfo);

// @route   Patch /user
// @desc    Edit And Update Record
// @access  Private
router.patch("/:id", userController.updateUserInfo);


// @route   DELETE user/:id
// @desc    Delete post
// @access  Private
router.delete("/:id", userController.removeUser);

module.exports = router;
