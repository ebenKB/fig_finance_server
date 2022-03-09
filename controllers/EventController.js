import Event from "../models/Event.js";

/**
 * Create a new event
 * @param {*} event The new event to create
 * @returns an instance of the event created
 */
export const createEvent = async (event) => {
  if(!event) {
    throw new Error("Event cannot be empty");
  }
  return await Event.create(event);
}

// Get events sorted by date
export const getAllEvents = async (page=1, limit=10) => {
  // check if limit and page are valid
  if((limit && page) && (limit <= Number.MAX_SAFE_INTEGER) && (page <= Number.MAX_SAFE_INTEGER)) {
    const SKIP = (page - 1) * limit;
    const events = await Event.find()
      .skip(SKIP)
      .limit(limit)
      .sort({date: -1});
    
    const count = await Event.countDocuments();
  
    // check meta data for pagination
    const meta = {
      total: count,
      page,
      limit
    }

    return { events, meta, };
  } else {
    throw new Error("Limit or Page is not valid")
  }
};

/**
 * Search for events based on the search key that the use has provided.
 * The search is performed on title, description, category or address of the event. * 
 * @param {*} param {search, page, limit}
 * @returns an array of events if found else []
 */
export const searchEvents = async ({search="", page, limit}) => {
  if(!search || search == "") return [];

  const SKIP=(page - 1) * limit;
  
  // search events by title, description, category or address
  const regex = new RegExp(search, 'i');
  return await Event.find({$or: [
    {title: {$regex: regex}}, 
    {description: {$regex: regex}},
    {category: {$regex: regex}},
    {address: {$regex: regex}},
  ]})
  .skip(SKIP)
  .limit(limit)
}
