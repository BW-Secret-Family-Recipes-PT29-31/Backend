const express = require("express");
const router = require("express").Router();
const Recipe = require("./recipes-model");

//GET ALL RECIPES

router.get("/", (req, res) => {
  Recipe.find()
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((error) => {
      res
        .status(401)
        .json({ error: error, message: "couldn't retrieve recipes" });
    });
});

//GET RECIPE WITH SPECIFIC ID

router.get("/:recipe_id", async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.recipe_id);
  res.status(200).json(recipe);
  next();
});

//GET INGREDIENTS

router.get("/:recipe_id/ingredients", (req, res) => {
  Recipe.findIngredients(req.params.recipe_id)
    .then((ingredients) => {
      res.status(200).json(ingredients);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
