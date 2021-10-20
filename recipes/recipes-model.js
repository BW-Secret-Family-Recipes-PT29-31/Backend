const db = require("../database/dbConfig");

//FIND

function find() {
  return db("recipes").select(
    "recipe_id",
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

module.exports = {
  find,
  findById,
};
