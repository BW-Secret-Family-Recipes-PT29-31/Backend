
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Austin', password: 'hashed password'},
        {username: 'Kendall', password:'hash password'},
        {username: 'Sara', password: 'hashes password'},
        {username: 'Roxanne', password: 'hashs password'},
        {username: 'Sofia', password: 'hashd password'}
      ]);
    });
};
