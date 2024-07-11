const express = require("express");
const contactRouter = require("./Router/contactRouter");
const userRouter = require("./Router/userRouter");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const errorHandler = require("./Middlewares/errorHandler");

const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./db/mongo");

app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log("The server is running on ", port);
    });
  })
  .catch((err) => {
    console.log("DB error", err);
  });
