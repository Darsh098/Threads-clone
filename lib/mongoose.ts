import mongoose from "mongoose";

let isConnected = false; // variable to check if mongoose is connected.

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  const DB_URL = process.env.MONGODB_URL;
  if (!DB_URL) return console.log("MONGODB_URL Not Found");
  if (isConnected) return console.log("Already Connected To MongoDB");

  try {
    await mongoose.connect(DB_URL);
    isConnected = true;
    console.log("Connected to Mongo");
  } catch (error) {
    console.log(error);
  }
};
