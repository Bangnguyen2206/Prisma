import express from "express";
import postRouter from "./routes/post.js";
const app = express();

app.use(express.json());

app.use(postRouter);
const PORT = process.env.PORT || 4000;
app.listen(3000, () => console.log(`Server ${PORT} is running!`));
