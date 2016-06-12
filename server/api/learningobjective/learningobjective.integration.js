'use strict';

var app = require('../..');
import request from 'supertest';

var newLearningobjective;

describe('Learningobjective API:', function() {

  describe('GET /api/learningobjectives', function() {
    var learningobjectives;

    beforeEach(function(done) {
      request(app)
        .get('/api/learningobjectives')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          learningobjectives = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      learningobjectives.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/learningobjectives', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/learningobjectives')
        .send({
          name: 'New Learningobjective',
          info: 'This is the brand new learningobjective!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newLearningobjective = res.body;
          done();
        });
    });

    it('should respond with the newly created learningobjective', function() {
      newLearningobjective.name.should.equal('New Learningobjective');
      newLearningobjective.info.should.equal('This is the brand new learningobjective!!!');
    });

  });

  describe('GET /api/learningobjectives/:id', function() {
    var learningobjective;

    beforeEach(function(done) {
      request(app)
        .get('/api/learningobjectives/' + newLearningobjective._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          learningobjective = res.body;
          done();
        });
    });

    afterEach(function() {
      learningobjective = {};
    });

    it('should respond with the requested learningobjective', function() {
      learningobjective.name.should.equal('New Learningobjective');
      learningobjective.info.should.equal('This is the brand new learningobjective!!!');
    });

  });

  describe('PUT /api/learningobjectives/:id', function() {
    var updatedLearningobjective;

    beforeEach(function(done) {
      request(app)
        .put('/api/learningobjectives/' + newLearningobjective._id)
        .send({
          name: 'Updated Learningobjective',
          info: 'This is the updated learningobjective!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedLearningobjective = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedLearningobjective = {};
    });

    it('should respond with the updated learningobjective', function() {
      updatedLearningobjective.name.should.equal('Updated Learningobjective');
      updatedLearningobjective.info.should.equal('This is the updated learningobjective!!!');
    });

  });

  describe('DELETE /api/learningobjectives/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/learningobjectives/' + newLearningobjective._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when learningobjective does not exist', function(done) {
      request(app)
        .delete('/api/learningobjectives/' + newLearningobjective._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
