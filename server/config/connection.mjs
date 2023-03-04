import mongoose from "mongoose";
import colors from "colors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3100;
mongoose.set("strictQuery", true);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT);
    console.log(
      `MongoDB database on port ${PORT} is connected!!! ${conn.connection.host}`.blue
    );
  } catch (error) {
    console.error(`Error: ${error}`.red);
    process.exit(1);
  }
};
