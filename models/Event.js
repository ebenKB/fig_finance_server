import mongoose from "mongoose";

const schema = new mongoose.Schema({ 
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {    
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  isVirtual: {
    type: Boolean,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model('Event', schema);
export default Event;