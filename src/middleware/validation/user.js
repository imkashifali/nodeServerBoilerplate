const { check, validationResult } = require("express-validator");

exports.validateUserLogin = [
  check("fullname")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is Required")
    .not()
    .isString()
    .withMessage("Must be Valid Name")
    .isLength({ min: 5, max: 20 })
    .withMessage("Name Must be within 3 to 20 character"),
  check("email")
  .normalizeEmail()
  .isEmail()
  .withMessage("Invalid Email"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is empty")
    .isLength({ min: 8, max: 20 })
    .withMessage("password Must be  3 to 20 character long"),
    check("cpassword")
    .trim()
    .not()
    .isEmpty()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Both Password Must Be Same");
      }
      return true;
    }),
];

exports.userVlidation = (req, res, next) => {
  const result = validationResult(req).array()
  //  console.log(result)
  if (!result.length) return next();

  const error = result[0].msg;
  res.json({ success: false, message: error });
};
