import { Mongoose } from "mongoose";

const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`MongoDB Connected : ${connection.connection.host}`);
  } catch (error) {
    console.log("Unable to connect to MongoDB ", error);
  }
};

module.exports = connectDB;
