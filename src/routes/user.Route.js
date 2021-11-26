const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.Controller')

// @route   GET /user
// @desc    user post route
// @access  Public

router.get('/', userController.getUsers);


// @route   GET /user
// @desc    user Search post route
// @access  Public


router.get("/:id", userController.getSingleUser);

// @route   Post /user
// @desc    Save Data In Database
// @access  Public

router.post("/",userController.saveUserInfo );

// @route   Patch /user
// @desc    Edit And Update Record
// @access  Private


router.patch('/:id', userController.updateUserInfo)


router.delete("/:id", userController.removeUser);









module.exports = router;
