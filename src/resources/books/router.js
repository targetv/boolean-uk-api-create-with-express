const express = require("express");

const booksRouter = express.Router();
const Books = require("./model");
const { createOneBook } = Books();

Books();

booksRouter.get("/", (req, res) => {
  res.json({ product: "Books" });
});

booksRouter.post("/", (req, res) => {
  const newBook = req.body;

  createOneBook(newBook, (createBook) => {
    res.json({ Book: createBook });
  });
});

module.exports = booksRouter;
