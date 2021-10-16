
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1,
          recipes_id: 1,
          ingredient: 'potatoes',
          ingredient: 'onions',
          ingredient: 'hot peppers',
          ingredient: 'seasonings',
          ingredient: 'oil'},
        {id: 2, 
          recipes_id: 2,
          ingredient: 'chicken breast',
          ingredient: 'oil',
          ingredient: 'seasoning mix',
          ingredient: 'rice'},          
        {id: 3,
          recipes_id: 3,
          ingredient: 'steak',
          ingredient: 'corn tortilla',
          ingredient: 'onions',
          ingredient: 'cilantro',
          ingredient: 'oil',
          ingredient: 'seasonings'},
        {id: 4,
          recipes_id: 4,
          ingredient:''},
        {id: 5, 
          recipes_id: 5,
          ingredient: ''},
        {id: 6,
          recipes_id: 6,
          ingredient: ''}      
      ]);
    });
};
