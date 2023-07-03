import { createPost, getAllPost } from "../controller/post.js";
import express from "express";
import verify from "../middleware/verifyToken.js";
const postRouter = express.Router();

// Create posts
postRouter.post("/post", verify, async (req, res) => {
  const payload = req.body;
  const newPost = await createPost(payload);
  return res.json(newPost);
});

// Get list posts
postRouter.get("/post", async (req, res) => {
  const getPosts = await getAllPost();
  return res.json(getPosts);
});

// Get users
postRouter.get("/post", async (req, res) => {
  const getPosts = await getAllPost();
  return res.json(getPosts);
});

export default postRouter;
