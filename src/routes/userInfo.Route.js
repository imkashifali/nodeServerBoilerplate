const express = require("express");
const router = express.Router();
const userInfoController = require("../controllers/userInfo.Controller");
const {validateUserInfo,UserDetailsValidations}=require ('../middleware/validation/userInfo')


// @route   GET /userInfo
// @desc    userInfo route
// @access  Public
router.get("/", userInfoController.getUserDetail);


// @route   GET /userInfo
// @desc    userInfo Search  route
// @access  Public getSingleUserInfo
router.get("/:id", userInfoController.getSingleUserInfo);


// @route   Post /userInfo
// @desc    Save Data In Database
// @access  Private
router.post("/",validateUserInfo,UserDetailsValidations, userInfoController.saveUserInfo);


// @route   Patch /userInfo
// @desc    Edit And updateUserInfo
// @access  Private
router.patch("/:id", userInfoController.updateUserInfo);


// @route   DELETE userInfo/:id
// @desc    Delete userInfo
// @access  Private
router.delete("/:id", userInfoController.removeUserInfo);



// @route   GET /userInfo
// @desc    userInfo Search route
// // @access  Public 
 router.get("/byinfouser/:id", userInfoController.getUserByid);






























module.exports = router;
