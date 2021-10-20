const db = require("../database/dbConfig");

//FIND

function find() {
  return db("recipes").select("id", "title", "source", "category");
}

function findUserById(users_id) {
  return db("users").where({ users_id }).select("id", "username");
}

function findById(recipes_id) {
  return db("recipes")
    .where({ recipes_id })
    .select("id", "title", "source", "category");
}

function findIngredients(id) {
  return db("ingredients as in")
    .join("recipes as r", "r.id", "=", "in.recipe_id")
    .select("in.name", "in.id")
    .where({ recipe_id: id });
}

function findInstructions(id) {
  return db("instructions as i")
    .join("recipes as r", "r.id", "=", "in.recipe_id")
    .select("r.title", "i.steps", "i.instructions", "i.id")
    .where({ recipe_id: id})
}

//ADD

function add(recipe) {
  return db("recipes").insert(recipe);
}

function addIngredients(ingredients) {
  return db("ingredients").insert(ingredients);
}

function addInstructions(instruction) {
  return db("instructions").insert(instruction);
}

//UPDATE

function update(changes, id) {
  return db("recipes").where({ id }).update(changes);
}

function updateIngredients(changes, id) {
  return db("ingredients").where({ id }).update(changes);
}

function updateInstructions(changes, id) {
  return db("instructions").where({ id }).update(changes);
}

//DELETE

function remove(id) {
  return db("recipes").where({ id }).del();
}

function removeIngredients(id) {
  return db("ingredients").where({ recipe_id: id }).del();
}

function removeInstructions(id) {
  return db("instructions").where({ recipe_id: id }).del();
}

module.exports = {
  find,
  findUserById,
  findById,
  findInstructions,
  findIngredients,
  add,
  addIngredients,
  addInstructions,
  update,
  updateIngredients,
  updateInstructions,
  remove,
  removeIngredients,
  removeInstructions,
};
