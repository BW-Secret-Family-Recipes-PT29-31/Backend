
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Austin', password: 'hashed password'},
        {id: 2, username: 'Danielle', password:'hashed password'},
        {id: 3, username: 'Constance', passeord: 'hashed password'},
        {id: 4, username: 'Richino', password: 'hashed password'},
        {id: 5, username: 'Sofia', password: 'hashes password'}
      ]);
    });
};
