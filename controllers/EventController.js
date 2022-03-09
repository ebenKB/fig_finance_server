import Event from "../models/Event.js";

export const createEvent = async (event) => {
  return await Event.create(event);
}

export const getAllEvents = async (page=1, limit=10) => {
  const SKIP = (page - 1) * limit;
  return await Event.find()
    .skip(SKIP)
    .limit(limit)
    .sort({_id: 1})
};

export const searchEvents = async ({search="", page, limit}) => {
  if(search == "") return [];

  let events =[];
  const SKIP=(page - 1) * limit;
  
  // search events by title, description, category or address
  const regex = new RegExp(search, 'i');
  events = await Event.find({$or: [
    {title: {$regex: regex}}, 
    {description: {$regex: regex}},
    {category: {$regex: regex}},
    {address: {$regex: regex}},
  ]})
  .skip(SKIP)
  .limit(limit)
  return events;
}
