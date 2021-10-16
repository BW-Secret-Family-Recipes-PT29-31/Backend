
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
    tbl.increments('user_id')
    tbl.string('username')
      .notNullable()
      .unique()
    tbl.string('password')
      .notNullable()
      .unique()
    // tbl.string('email') // here in case we decide to use this
    //   .notNullable()  
  })

  .createTable('recipes', tbl => {
    tbl.increments('recipes_id')

    tbl
      .integer('user_id')
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tbl
      .string('recipe_name')
      .notNullable()
    
    tbl.string('title')  
    tbl.string('category_name');

    tbl.string('source_name');
  })

  .createTable('instructions', tbl => {
    tbl.increments('instructions_id')
    tbl
      .integer('recipes_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    tbl.string('steps')  
  })

  .createTable('ingredients', tbl => {
    tbl.increments('ingredients_id')
    tbl
      .string('ingredient')
      .notNullable()
      .unique()
    tbl
      .integer('recipes_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')  
  })

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('recipes')
  .dropTableIfExists('instructions')
  .dropTableIfExists('ingredients')
};
