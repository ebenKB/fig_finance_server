import Event from "../models/Event.js";

export const createEvent = async (event) => {
  return await Event.create(event);
}