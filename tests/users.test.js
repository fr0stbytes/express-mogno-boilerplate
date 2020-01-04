const request = require('supertest')
const app = require('../app')
describe('Get Users Listsings', () => {
  it('respond with a string', async () => {
    const res = await request(app)
      .get('/users')
    .expect(200)
    // .expect('Content-Type', /json/)
    // .expect()
  })
})

// User should be unique (not use same email to register users)
// CRUD operations can only be performed by logged in users 
// CRUD operations can only be performed by users with admin role
