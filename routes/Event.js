import express from "express";
import logger from "../config/logger.js";

import { createEvent, getAllEvents, searchEvents } from "../controllers/EventController.js";

const router = express.Router();

router.get("/", async(req, res) => {
  const events = await getAllEvents();
  res.status(200).json(events);
})

router.get("/search", async(req, res) => {
  try {
    const { q, page, limit } = req.query
    const events = await searchEvents({search: q, page, limit});
    res.status(200).json(events);
  } catch (error) {
    logger.log("error", error.message);
    res.status(500).send("Error fetching events");
  }
})

router.post('/', async (req, res) => {
  try {
    const created = await createEvent({
      title: "Some title 2",
      description: "Some description is here",
      category: "Machine learning",
      isVirtual: true,
      address: "Ghana, Accra",
    })
    res.status(201).send(created);
  } catch (error) {
    logger.log("error", error.message)
    res.status(500).send("An error occurred while creating an event")
  }
})

export default router;