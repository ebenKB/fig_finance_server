import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import { connectToDB } from "./config/db.js";
import EventRouter from "./routes/Event.js";

// use environment variables
dotenv.config();

// connect to database
connectToDB();

const app = express();

// accept json formats
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// register application routes
app.use("/event", EventRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));