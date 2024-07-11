const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "The userName is mandatory"],
    },
    email: {
      type: String,
      required: [true, "The email is mandatory"],
    },
    password: {
      type: String,
      required: [true, "The password is mandatory"],
    },
  },
  { timeStamps: true },
);

module.exports = mongoose.model("User", userSchema);
