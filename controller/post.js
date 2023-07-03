import prisma from "../lib/prisma.js";

export const createPost = async (payload) => {
  const newPost = await prisma.post.create({
    data: {
      title: "Test post",
    },
  });
  return newPost;
};
