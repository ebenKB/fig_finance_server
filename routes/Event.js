import express from "express";

import { createEvent, getAllEvents } from "../controllers/EventController.js";

const router = express.Router();

router.get("/", async(req, res) => {
  const events = await getAllEvents();
  res.status(200).json(events);
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
    res.status(500).send("An error occurred while creating an event")
  }
})

export default router;