import Event from "../models/Event.js";

export const createEvent = async (event) => {
  return await Event.create(event);
}

export const getAllEvents = async (page, limit) => {
  return await Event.find();
}