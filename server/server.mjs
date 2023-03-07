import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import dotenv from "dotenv";
import {connectDB} from "./config/connection.mjs";
import session from 'express-session'
import { default as connectMongoDBSession} from 'connect-mongodb-session';
import errorHandler from "./middleware/errorMid.mjs";

dotenv.config();
connectDB()

const MongoDBStore = connectMongoDBSession(session);


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.send('<h1>Hello world</h1>')
})

app.use(errorHandler)


