const express = require("express");

const Recipes = require("./recipes-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.find()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ err: err, message: "Failed to get recipes" });
    });
});

router.get("/ingredients/:id", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then((list) => {
      console.log(list);
      res.status(200).json({ list: list });
    })
    .catch((err) => {
      res.status(400).json({ err: err, message: "Failed to get the list " });
    });
});

router.get("/steps/:id", (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id)
    .then((steps) => {
      console.log(steps);
      res.status(200).json({ instructions: steps });
    })
    .catch((err) => {
      res.status(400).json({ err: err, message: "Failed to get the steps " });
    });
});
module.exports = router;
