const User = require("../Models/users.model");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
//@desc register user
//@path POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "The user already exist" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    userName,
    email,
    password: hashedPassword,
  });
  console.log(newUser);
  res.status(200).json({
    message: "Registered the user",
    newUser: { id: newUser._id, email: newUser.email },
  });
});
//@desc login user
//@path POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login the user" });
});
//@desc get current user info
//@path GET /api/users/current
//@access public
const currentUser = asyncHandler((req, res) => {
  res.json({ message: "Get the information about current user" });
});

module.exports = { registerUser, loginUser, currentUser };
