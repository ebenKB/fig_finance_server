import express from "express";
import { connectToDB } from "./config/db.js";
import dotenv from "dotenv";

// use environment variables
dotenv.config();

// connect to database
connectToDB();

const app = express();

app.get('/', async (req, res) => {
  res.send('App is live')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));