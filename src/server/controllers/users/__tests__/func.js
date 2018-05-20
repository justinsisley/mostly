import axios from 'axios';

describe('users', () => {
  it('should return an array of users', async () => {
    const { data } = await axios.get('http://localhost:3325/api/users');

    // Should be an array of user objects
    expect(Array.isArray(data));
    expect(data.length).toBe(10);

    // Check the first user for known properties
    expect(data[0]).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      username: expect.any(String),
      email: expect.any(String),
      address: expect.any(Object),
      phone: expect.any(String),
      website: expect.any(String),
      company: expect.any(Object),
    });
  });
});
