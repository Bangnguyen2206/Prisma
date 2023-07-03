import { createPost } from "../controller/post.js";
const postRouter = express.Router();

// Create posts
postRouter.post("/posts", async (req, res) => {
  const payload = req.body;
  const newPost = new createPost(payload);
  return res.json(newPost);
});

// Get list posts
postRouter.get("/posts", async (req, res) => {
  //   const payload = req.body;
  //   const newPost = new createPost(payload);
  //   return res.json(newPost);
});

export default postRouter;
