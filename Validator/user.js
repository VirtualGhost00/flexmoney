const { body, validationResult } = require("express-validator");

const userValidationRules = () => {
  return [
    body("name").isLength({ min: 4 }),
    body("email").isEmail(),
    body("age").isNumeric(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  userValidationRules,
  validate,
};
