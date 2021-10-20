const express = require("express");
const router = require("express").Router();
const Recipe = require("./recipes-model");

//GET RECIPE WITH SPECIFIC ID

router.get("/:recipe_id", async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.recipe_id);
  res.status(200).json(recipe);
});

//GET INSTRUCTIONS

module.exports = router;
