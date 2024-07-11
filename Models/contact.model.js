const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field is required"],
    },
    email: {
      type: String,
      required: [true, "This field is required"],
    },
    number: {
      type: String,
      required: [true, "This field is required"],
    },
  },
  { timestamps: true },
);
const contact = mongoose.model("contact", contactSchema);

module.exports = contact;
