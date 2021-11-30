const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.Controller");
const {validateProduct,productValidation}=require ('../middleware/validation/Product')


// @route   GET /product
// @desc    products route
// @access  Public
router.get("/", productController.getProducts);


// @route   GET /product
// @desc    product Search post route
// @access  Public getProductByUserid
router.get("/:id", productController.getSingleProduct);


// @route   Post /product
// @desc    Save Data In Database
// @access  Private
router.post("/", validateProduct,productValidation,productController.saveProductInfo);


// @route   Patch /product
// @desc    Edit And Update product
// @access  Private
router.patch("/:id", productController.updateProductInfo);


// @route   DELETE product/:id
// @desc    Delete product
// @access  Private
router.delete("/:id", productController.removeProduct);



// @route   GET /product
// @desc    product Search post route
// @access  Public 
router.get("/byuser/:id", productController.getProductByUserid);






























module.exports = router;
