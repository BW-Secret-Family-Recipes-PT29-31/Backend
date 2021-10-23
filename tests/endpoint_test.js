const request = require('supertest');
const server = require('../api/server');
// const Users = require('../users/users-model'); for when needed
const Recipes = require('../recipes/recipes-model');
const db = require('../database/dbConfig');

let token;

// For when Users is completed

// beforeAll((fin) => {
//   request(server)
//     .post('/users')
//     .send({
//       username: 'test',
//       password: 'test123'
//     })
//     .end((err, res) => {
//       token = res.body.token;
//       fin();
//     })
// });

// beforeEach(async () => {
//   // await db('users').truncate();
//   await db('recipes').truncate();
// })

//Users


// Recipes
// describe('Get /', () => {
//   it('retrieve list of recipes', () => {
//       return request(server)
//               .get('/recipes')
//               .set('authorization', token)
//               .then(response => {
//                   expect(Array.isArray(response.body)).toBe(true);
//               })
//   })
// })

// describe('Get /', () => {
//   it('should return an array of length 2', () => {
//       return request(server)
//               .get('/recipes')
//               .set('authorization', token)
//               .then(response => {
//                   expect(response.body).toHaveLength(2);
//               })
//   })
// })