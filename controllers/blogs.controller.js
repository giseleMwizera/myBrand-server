const Blog = require("../models/blog.model");
const { post } = require("../routes/blogs.route");

// Find single blog
const getBlog = async (req, res) => {
  const blog = await Blog.findById({ _id: req.params.id });
  res.send(blog);
};

// Find all blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.send(blogs);
};

// create blog
const createBlog = async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    coverPhoto: req.body.coverPhoto,
  });

  await blog.save();
  res.send(blog);
};

// delete a blog
const deleteBlog = async (req, res) => {
  try {
    await Blog.deleteOne({ _id: req.params.id });
    res.json({ status: 200, message: "deleted successsfully" });
  } catch {
    res.json({ status: 404, message: "Resource not found" });
  }
};

// update a blog

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json({ status: 200, message: "updated", blog });
  } catch {
    res.json({ status: 404, message: "Not found" });
  }
};

// Like a blog
const likeBlog = async (req, res) => {};

// comment on a blog
const commentOnBlog = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, msg: `Blog not found!` });
    } else {
      const blog = await Blog.findById({ _id: req.params.id });

      blog.comments.push({ user: req.user._id, comment: req.body.comment });

      const newBlog = await Blog.findByIdAndUpdate(id, blog, {
        new: true,
      });
      res.json({ status: 200, newBlog });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBlog,
  getBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  likeBlog,
  commentOnBlog,
};
