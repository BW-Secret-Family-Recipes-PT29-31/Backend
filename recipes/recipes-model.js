const db = require("../database/dbConfig");

//FIND

function find() {
  return db("recipes").select(
    "recipe_name",
    "recipe_title",
    "source_name",
    "category_name"
  );
}

function findById(recipes_id) {
  return db("recipes")
    .where({ recipes_id })
    .select("recipes_id", "recipe_title", "source_name", "category_name");
}

function findIngredients(recipes_id) {
  return db("ingredients").select("ingredient").where("recipes_id", recipes_id);
}

module.exports = {
  find,
  findById,
  findIngredients,
};
