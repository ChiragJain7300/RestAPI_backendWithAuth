const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbConnect = async () => {
  try {
    const connString = await mongoose.connect(`${process.env.URI}`, {
      dbName: "myContacts",
    });
    console.log("\n mongoDB connected!! at", connString.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = dbConnect;
