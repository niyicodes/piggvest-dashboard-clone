import express from "express";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
import { connectDB } from "./config/connection.mjs";
import session from "express-session";
import { default as connectMongoDBSession } from "connect-mongodb-session";
import errorHandler from "./middleware/errorMid.mjs";
import router from "./route/route.mjs";

dotenv.config();
connectDB();

const MongoDBStore = connectMongoDBSession(session);

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Acces-Control-Origin", "*");
  res.setHeader("Acces-Control-Method", "GET, POST, PUT, DELETE, PATCH");
  res.setHeader("Acces-Control-Headers", "Content-Type, Authorization");
});

app.use(router);

app.use(errorHandler);
