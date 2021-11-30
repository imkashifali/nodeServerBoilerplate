const { check, validationResult } = require("express-validator");

exports.validateProduct = [

  check("productName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("productName is Required")
    .isLength({ min: 5, max: 20 }),
    
    check("productBrand")
    .trim()
    .not()
    .isEmpty()
    .withMessage("productBrand is Required")
    .not()
    .isString()
    .withMessage("Must be Valid productBrand")
    .isLength({ min: 5, max: 20 })
    .withMessage("productBrand Must be within 3 to 20 character"),

    
    check("productCategory")
    .trim()
    .not()
    .isEmpty()
    .withMessage("productCategory is Required")
    .not()
    .isString()
    .withMessage("Must be Valid productCategory")
    .isLength({ min: 5, max: 20 })
    .withMessage("productCategory Must be within 3 to 20 character"),


    check("productImageUrl")
    .trim()
    .not()
    .isEmpty()
    .withMessage("productImageUrl is Required")
    .not()
    .isString()
    .withMessage("Must be Valid productImageUrl")
    .isLength({ min: 5, max: 20 })
    .withMessage("productImageUrl Must be within 3 to 20 character"),



    check("productColor")
    .trim()
    .not()
    .isEmpty()
    .withMessage("productColor is Required")
    .not()
    .isString()
    .withMessage("Must be Valid productColor")
    .isLength({ min: 5, max: 20 })
    .withMessage("productColor Must be within 3 to 20 character"),

    
];

exports.productValidation = (req, res, next) => {
  const result = validationResult(req).array()
  //  console.log(result)
  if (!result.length) return next();

  const error = result[0].msg;
  res.json({ success: false, message: error });
};
