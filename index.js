const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/blogs.route");

const PORT = 8000;

// Start the server
mongoose
  .connect("mongodb://localhost:27017/myBrand", { useNewUrlParser: true })
  .then(() => {
    const app = express();

    // middlewares
    app.use(express.json());
    app.use("/resources", blogRouter);

    app.listen(PORT, () => {
      console.log(`App listening on port: ${PORT}`);
    });
  })
  .catch(() => {
    console.log("cant connent");
  });
