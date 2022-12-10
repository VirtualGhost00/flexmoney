const express = require("express");
const User = require("../Models/user");
const router = express.Router();

const { userValidationRules, validate } = require("../Validator/user");

router.post("/user", userValidationRules(), validate, async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  });
  await newUser.save();

  res.send({ message: "Successfully Saved!!", body: req.body });
});

module.exports = router;
