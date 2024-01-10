import { Router } from "express";
import { createPost, getPosts } from "../controllers/post.controller.js";

const router = Router();

router.route("/").get(getPosts);
router.route("/").post(createPost);

export default router;
