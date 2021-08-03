const express = require("express");

const booksRouter = express.Router();
const Books = require("./model");

Books();

booksRouter.get("/", (req, res) => {
  res.json({ product: "Books" });
});

module.exports = booksRouter;
