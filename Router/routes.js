const express = require("express");
const User = require("../Models/user");
const router = express.Router();

router.post("/user", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  });
  await newUser.save();

  res.send({ message: "Successfully Saved!!", body: req.body });
});

module.exports = router;
