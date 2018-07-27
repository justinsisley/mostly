import axios from 'axios';

describe('session', () => {
  it('should return an object with a token property', async () => {
    const { data } = await axios.post('http://localhost:3325/api/session');

    // Check the response for known properties
    expect(data).toMatchObject({
      token: expect.any(String),
    });
  });
});
