const express = require("express");

const {
  getBlog,
    getBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  likeBlog,
  commentOnBlog,
} = require("../controllers/blogs.controller");

const blogRouter = express.Router();

blogRouter.get("/blog/:id", getBlog);
blogRouter.get('/blogs', getBlogs);
blogRouter.post('/blog', createBlog);
blogRouter.delete('/blog/:id', deleteBlog);
blogRouter.patch('/blog/:id', updateBlog);

module.exports = blogRouter;
