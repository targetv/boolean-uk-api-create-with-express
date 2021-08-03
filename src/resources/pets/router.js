const express = require("express");

const petsRouter = express.Router();
const Pet = require("./model");

const { addOnePet } = Pet();

Pet();

petsRouter.get("/", (req, res) => {
  res.json({ msg: "pets" });
});

petsRouter.post("/", (req, res) => {
  const newPet = req.body;

  addOnePet(newPet, (createPet) => {
    res.json({ newPet: createPet });
  });
});

module.exports = petsRouter;
