
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
    tbl.increments('user_id')
  })
  .createTable('recipes', tbl => {
    tbl.increments('recipes_id')
  })
  .createTable('instructions', tbl => {
    tbl.increments('instructions_id')
  })
  .createTable('ingredients', tbl => {
    tbl.increments('ingredients_id')
  })
  .createTable('category', tbl => {

  })
  .createTable('title', tbl => {

  })
  .createTable('source', tbl => {

  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('recipes')
  .dropTableIfExists('instructions')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('category')
  .dropTableIfExists('title')
  .dropTableIfExists('source')
};
