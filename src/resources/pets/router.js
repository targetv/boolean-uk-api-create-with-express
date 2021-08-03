const express = require("express");

const petsRouter = express.Router();
const Pet = require("./model");

Pet();

petsRouter.get("/", (req, res) => {
  res.json({ msg: "pets" });
});

module.exports = petsRouter;
