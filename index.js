import express from "express";
import dotenv from "dotenv";

// use environment variables
dotenv.config();

const app = express();

app.get('/', async (req, res) => {
  res.send('App is live')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));