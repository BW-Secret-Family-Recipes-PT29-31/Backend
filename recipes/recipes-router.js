const express = require("express");
const router = require("express").Router();
const Recipe = require("./recipes-model");
//GET ALL RECIPES
// router.get("/api/recipes", (req, res) => {
//   Recipe
//     .find()
//     .then((recipes) => {
//       res.status(200).json(recipes);
//     })
//     .catch((error) => {
//       res
//         .status(401)
//         .json({ error: error, message: "Could not retrieve any recipes" });
//     });
// });

//GET RECIPE WITH SPECIFIC ID

router.get("/:recipe_id", async(req, res, next) => {
  const recipe = await Recipe.findById(req.params.recipe_id)
  res.status(200).json(recipe)
})


module.exports = router;