const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session)
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}))


mongoose.set("strictQuery", true);
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT);
  }
);
