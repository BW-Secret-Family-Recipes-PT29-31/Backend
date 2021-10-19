
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { 
          recipes_id: 1,
          steps: 'google'
        },
        {
          recipes_id: 2,
          steps: 'google'
        },
        {
          recipes_id: 3,
          steps: 'google'
        },
        {
          recipes_id: 4,
          steps: 'google'
        },
        {
          recipes_id: 5,
          steps: 'google'
        },
        {
          recipes_id: 6,
          steps: 'google'
        }
      ]);
    });
};
