import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    max: 10
  },
  postOwnerName: {
    type: String,
    unique: true
  },
  postOwnerAge: {
    type: Number,
    required: true,
    min: [18, 'Must be at least 18, got {VALUE}']
  }
});

export const Post = mongoose.model('Post', postSchema);
