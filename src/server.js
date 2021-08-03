const express = require("express");
const morgan = require("morgan");
const db = require("./utils/database");
const booksRouter = require("../src/resources/books/router");
const petsRouter = require("./resources/pets/router");

const app = express();

app.use(morgan("dev"));

app.use("/books", booksRouter);

app.use("/pets", petsRouter);

app.get("*", (req, res) => {
  res.json({ msg: "Sorry wrong url" });
});

app.listen(4000, () => {
  db.connect((error) => {
    if (error) {
      console.error("Cannot connect to server");
    } else {
      console.log("Database is live");
    }
  });
  console.log("Server has started");
});
