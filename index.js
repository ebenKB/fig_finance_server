import express from "express";
import { connectToDB } from "./config/db.js";
import dotenv from "dotenv";
import EventRouter from "./routes/Event.js";

// use environment variables
dotenv.config();

// connect to database
connectToDB();

const app = express();

// register application routes
app.use("/event", EventRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));