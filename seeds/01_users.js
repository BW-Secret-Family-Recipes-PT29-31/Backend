
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Austin', password: 'hashed password'},
        {username: 'Danielle', password:'hashed password'},
        {username: 'Constance', password: 'hashed password'},
        {username: 'Richino', password: 'hashed password'},
        {username: 'Sofia', password: 'hashed password'}
      ]);
    });
};
