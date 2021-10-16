
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, 
          user_id: 1,
          recipe_name: 'Breakfast Hash', 
          title:'Breakfast Hash',
          category_name: 'Breakfast', 
          source_name:'Austin'},
        {id: 2, 
          user_id: 1,
          recipe_name: 'Baked Chicken', 
          title:'Chicken Yum',
          category_name: 'Dinner', 
          source_name:'Austin'},
        {id: 3, 
          user_id: 5,
          recipe_name: 'Tacos', 
          title:'Street Tacos',
          category_name: 'Dinner', 
          source_name:'Grandmother'},
        {id: 4,
          user_id: 2,
          recipe_name: 'rowValue1', 
          title:'',
          category_name: '', 
          source_name:''},
        {id: 5, 
          user_id: 3,
          recipe_name: 'rowValue1', 
          title:'',
          category_name: '', 
          source_name:''},
        {id: 6, 
          user_id: 4,
          recipe_name: 'rowValue1', 
          title:'',
          category_name: '', 
          source_name:''}      
      ]);
    });
};
