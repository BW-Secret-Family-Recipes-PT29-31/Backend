
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          recipes_id: 1,
          ingredient: 'Potatoes',
          ingredient: 'Onions',
          ingredient: 'Hot peppers',
          ingredient: 'Seasonings',
          ingredient: 'Oil'
        },
        {
          recipes_id: 2,
          ingredient: 'Chicken breast',
          ingredient: 'Oil',
          ingredient: 'Seasoning mix',
          ingredient: 'Rice'
        },          
        {
          recipes_id: 3,
          ingredient: 'Steak',
          ingredient: 'Corn tortilla',
          ingredient: 'Onions',
          ingredient: 'Cilantro',
          ingredient: 'Oil',
          ingredient: 'Seasonings'
        },
        {
          recipes_id: 4,
          ingredient: 'Pasta',
          ingredient: 'Tomato sauce',
          ingredient: 'Olive oil',
          ingredient: 'Pesto',
          ingredient: 'Seasoned ground beef'
        },
        {
          recipes_id: 5,
          ingredient: 'Noodles',
          ingredient: 'Crushed Tomatoes',
          ingredient: 'Ground Beef',
          ingredient: 'Onion',
          ingredient: 'Potatoe'
        },
        {
          recipes_id: 6,
          ingredient: 'Steak',
          ingredient: 'Shrimp',
          ingredient: 'Steamed Spinach'
        }      
      ]);
    });
};
