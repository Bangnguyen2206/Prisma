import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import prisma from "../lib/prisma.js";

const authRouter = express.Router();

// Create posts
authRouter.post("/signup", async (req, res) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
  const newUser = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    },
  });
  const accessToken = jwt.sign({ id: newUser.id }, process.env.SECRET_TOKEN, {
    expiresIn: 60 * 24,
    // expires in 24 hours
  });
  return res.header("Authorization", accessToken).send(accessToken);
});

authRouter.post("/login", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });
  if (!user) {
    return res.send("Email not founds");
  }

  //   Compare password to confirm user
  const passwordCompare = bcrypt.compareSync(req.body.password, user.password);
  const accessToken = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN, {
    expiresIn: 60 * 24,
    // expires in 24 hours
  });

  if (!passwordCompare) {
    return res.send("Invalid Password");
  } else {
    return res.header("Authorization", accessToken).send(accessToken);
  }
});

export default authRouter;
