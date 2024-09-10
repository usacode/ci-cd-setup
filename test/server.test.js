const request = require('supertest');
const app = require('../server'); // Import the app for testing

describe('GET /', () => {
  it('should return Hello World', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        if (res.text !== 'Hello World')
          throw new Error('Response does not contain "Hello World"');
      })
      .end(done);
  });
});
