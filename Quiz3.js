const { expect } = require('chai');
const request = require('supertest');

const app = 'https://reqres.in'; // Assuming the API base URL is 'https://reqres.in'

describe('Quiz3', () => {
  it('should create a new user', async () => {
    const newUser = {
      name: 'Karis Fabriyanto',
      job: 'QA Engineer',
    };
    const response = await request(app)
      .post('/api/users')
      .send(newUser);

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('name', newUser.name);
    expect(response.body).to.have.property('job', newUser.job);
  });

  it('should retrieve a user by ID', async () => {
    const userId = 2;
    const response = await request(app)
      .get(`/api/users/${userId}`);

    expect(response.status).to.equal(200);
    expect(response.body.data).to.have.property('id', userId);
  });

  it('should update the created user', async () => {
    const updatedUser = {
      name: 'Jane Doe',
      job: 'QA Engineer',
    };

    const response = await request(app)
      .put(`/api/users/${createdUserId}`)
      .send(updatedUser)
      .expect(200);

    expect(response.body).to.have.property('name', updatedUser.name);
    expect(response.body).to.have.property('job', updatedUser.job);
  });

  it('should delete a user', async () => {
    const userId = 2;

    const response = await request(app)
      .delete(`/api/users/${userId}`);

    expect(response.status).to.equal(204);

    // Verify the user is deleted by trying to retrieve it again (it should return a 200 status)
    const getUserResponse = await request(app)
      .get(`/api/users/${userId}`);

    expect(getUserResponse.status).to.equal(200);
  });
});
