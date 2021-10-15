const router = require("express").Router();

const recipes = require("./recipes-model");

//GET ALL RECIPES 
router.get("/", (req, res) => {
  recipes
    .find()
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((error) => {
      res
        .status(401)
        .json({ error: error, message: "Could not retrieve any recipes" });
    });
});

//GET RECIPE WITH SPECIFIC ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  recipes
    .findById(id)
    .then((recipe) => {
      if (recipe) {
        res.json(recipe);
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


module.exports = router