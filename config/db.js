import mongoose from "mongoose";
import logger from "./logger.js";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    logger.log("info", "Connected to the database");
  } catch (error) {
    logger.log("error", "Error while connecting to the database");
  }
}