
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          recipes_id: 1,
          ingredient: 'potatoes',
          ingredient: 'onions',
          ingredient: 'hot peppers',
          ingredient: 'seasonings',
          ingredient: 'oil'
        },
        {
          recipes_id: 2,
          ingredient: 'chicken breast',
          ingredient: 'oil',
          ingredient: 'seasoning mix',
          ingredient: 'rice'
        },          
        {
          recipes_id: 3,
          ingredient: 'steak',
          ingredient: 'corn tortilla',
          ingredient: 'onions',
          ingredient: 'cilantro',
          ingredient: 'oil',
          ingredient: 'seasonings'
        },
        {
          recipes_id: 4,
          ingredient:'stuff'
        },
        {
          recipes_id: 5,
          ingredient: 'things'
        },
        {
          recipes_id: 6,
          ingredient: 'stuff AND things'
        }      
      ]);
    });
};
