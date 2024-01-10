import { Post } from "../models/Post.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createPost = asyncHandler(async (req, res) => {
  const { title, description, postOwnerName, postOwnerAge } = req.body;

  [title, description, postOwnerName, postOwnerAge].forEach((item) => {
    if (!item) throw new ApiError(401, "Please provide requird data");
  });

  const post = await Post.create(req.body);

  if (!post) {
    throw new ApiError(500, "Something went wrong while saving the post");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, post, "Post is created successfully"));
});


const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find();

    if (!posts) throw new ApiError(500, 'Could not found any post');

    return res.status(200)
    .json(new ApiResponse(200, posts, 'All posts are shown here'));
})

export {
    createPost,
    getPosts
}