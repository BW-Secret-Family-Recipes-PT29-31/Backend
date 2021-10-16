
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, 
          recipes_id: 1,
          steps: 'google'},
        {id: 2, 
          recipes_id: 2,
          steps: 'google'},
        {id: 3, 
          recipes_id: 3,
          steps: 'google'},
        {id: 4, 
          recipes_id: 4,
          steps: 'google'},
        {id: 5, 
          recipes_id: 5,
          steps: 'google'},
        {id: 6, 
          recipes_id: 6,
          steps: 'google'}
      ]);
    });
};
