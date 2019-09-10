import request from 'supertest';
import server from '../index';

describe('/api/genres', () => {
  beforeEach(() => {
    // initialize the server before testing
  });

  // close the server after testing
  afterEach(() => {
    server.close();
  });

  describe('GET /', () => {
    it('should be successfully accessed', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });
  });
});
