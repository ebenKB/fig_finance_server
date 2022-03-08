import express from "express";
import { connectToDB } from "./config/db.js";
import dotenv from "dotenv";
import { createEvent } from "./services/EventService.js";

// use environment variables
dotenv.config();

// connect to database
connectToDB();

const app = express();

app.get('/', async (req, res) => {
  try {
    const created = await createEvent({
      title: "Some title 2",
      description: "Some description is here",
      category: "Machine learning",
      isVirtual: true,
      address: "Ghana, Accra",
    })
    console.log("Created", created);
  } catch (error) {
    
  }
  res.send('App is live')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));