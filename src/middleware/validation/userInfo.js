const { check, validationResult } = require("express-validator");

exports.validateUserInfo = [

  check("userAddress")
    .trim()
    .not()
    .isEmpty()
    .withMessage("userAddress is Required")
    .isLength({ min: 5, max: 20 }),
    check("city")
    .trim()
    .not()
    .isEmpty()
    .withMessage("city is Required")
    .isLength({ min: 5, max: 20 }),
    check("country")
    .trim()
    .not()
    .isEmpty()
    .withMessage("country is Required")
    .isLength({ min: 5, max: 20 }),
    check("postalCode")
    .trim()
    .not()
    .isEmpty()
    .withMessage("postalCode is Required")
    .isLength({ min: 5, max: 20 }),
    check("street")
    .trim()
    .not()
    .isEmpty()
    .withMessage("street is Required")
    .isLength({ min: 5, max: 20 }),
    check("houseNumber")
    .trim()
    .not()
    .isEmpty()
    .withMessage("houseNumber is Required")
    .isLength({ min: 5, max: 20 })
];

exports.UserDetailsValidations = (req, res, next) => {
  const result = validationResult(req).array()
  //  console.log(result)
  if (!result.length) return next();

  const error = result[0].msg;
  res.json({ success: false, message: error });
};
