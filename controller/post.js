import prisma from "../lib/prisma.js";

export const createPost = async (payload) => {
  const newPost = await prisma.post.create({
    data: {
      title: payload.title,
    },
  });
  return newPost;
};

export const getAllPost = async () => {
  const getPosts = await prisma.post.findMany();
  return getPosts;
};
