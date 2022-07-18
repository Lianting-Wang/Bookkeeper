const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

const should = require('should');

describe('test/app.test.js', function() {
  it('should return "Hi this is index." when GET /api/v1/', () => {
    request.get('/api/v1/')
        .end(function(err, res) {
          should.not.exist(err);
          res.text.should.equal('Hi this is index.');
        });
  });
  it('should return "Hi this is user." when GET /api/v1/user/', () => {
    request.get('/api/v1/user/')
        .end(function(err, res) {
          should.not.exist(err);
          res.text.should.equal('Hi this is user.');
        });
  });
  it('should return "This is PUT API" when GET /api/v1/record/', () => {
    request.get('/api/v1/record/')
        .end(function(err, res) {
          should.not.exist(err);
          res.text.should.equal('Hi this is record.');
        });
  });
  mongoose.disconnect();
});
