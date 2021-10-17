
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Austin', password: 'hashed password'},
        {username: 'Danielle', password:'hash password'},
        {username: 'Constance', password: 'hashes password'},
        {username: 'Richino', password: 'hashs password'},
        {username: 'Sofia', password: 'hashd password'}
      ]);
    });
};
