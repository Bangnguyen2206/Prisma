import express from "express";
import postRouter from "./routes/post.js";
import authRouter from "./routes/auth.js";

const app = express();

app.use(express.json());

app.use(postRouter, authRouter);
const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Server ${PORT} is running!`));
