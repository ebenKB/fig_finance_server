import express from "express";
import logger from "../config/logger.js";

import { createEvent, getAllEvents, searchEvents } from "../controllers/EventController.js";

const router = express.Router();

router.get("/", async(req, res) => {
  try {
    const { page, limit } = req.query
    const events = await getAllEvents(page, limit);
    res.status(200).json(events);
  } catch (error) {
    logger.log("error", error.message);
    res.status(404).json({error: error.message});
  }
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
    const created = await createEvent(req.body);
    
    res.status(201).json(created);
  } catch (error) {
    logger.log("error", error.message)
    res.status(500).send("An error occurred while creating an event")
  }
})

export default router;