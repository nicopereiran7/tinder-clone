import mongoose from "mongoose";

const { Schema } = mongoose;

const PeopleSchema = new Schema({
  name: String,
  imageUrl: String
})

export default mongoose.model("peoples", PeopleSchema);