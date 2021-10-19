const router = require("express").Router();

const Recipe = require("./recipes-model");
//GET ALL RECIPES
router.get("/api/recipes", (req, res) => {
  Recipe
    .find()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      res
        .status(401)
        .json({ error: error, message: "Could not retrieve any recipes" });
    });
});

//GET RECIPE WITH SPECIFIC ID

router.get("api/recipes/recipe_id", (req, res) => {
  const { id } = req.params.recipe_id;

  Recipe
    .findById(id)
    .then((recipe) => {
      if (recipe) {
        res.json(recipe_id);
      } else {
        res
          .status(404)
          .json({ message: "Could not find the recipe with that ID" });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: error, message: "Failed to get this recipe" });
    });
});

module.exports = router;
