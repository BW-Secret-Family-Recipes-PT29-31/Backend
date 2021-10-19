
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { 
          users_id: 1,
          recipe_name: 'Breakfast Hash', 
          recipe_title: 'Breakfast Hash',
          category_name: 'Breakfast', 
          source_name: 'Austin'
        },
        {
          users_id: 1,
          recipe_name: 'Baked Chicken', 
          recipe_title: 'Chicken Yum',
          category_name: 'Dinner', 
          source_name: 'Austin'
        },
        {
          users_id: 5,
          recipe_name: 'Tacos', 
          recipe_title: 'Street Tacos',
          category_name: 'Dinner', 
          source_name: 'Grandmother'
        },
        {
          users_id: 2,
          recipe_name: 'rowValue1', 
          recipe_title:'vvv',
          category_name: 'vvv', 
          source_name:'vvv'
        },
        {
          users_id: 3,
          recipe_name: 'rowValue1', 
          recipe_title:'vvv',
          category_name: 'vvv', 
          source_name:'vvv'
        },
        {
          users_id: 4,
          recipe_name: 'rowValue1', 
          recipe_title:'vvv',
          category_name: 'vvv', 
          source_name:'vvv'
        }      
      ]);
    });
};
