'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var learningobjectiveCtrlStub = {
  index: 'learningobjectiveCtrl.index',
  show: 'learningobjectiveCtrl.show',
  create: 'learningobjectiveCtrl.create',
  update: 'learningobjectiveCtrl.update',
  destroy: 'learningobjectiveCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var learningobjectiveIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './learningobjective.controller': learningobjectiveCtrlStub
});

describe('Learningobjective API Router:', function() {

  it('should return an express router instance', function() {
    learningobjectiveIndex.should.equal(routerStub);
  });

  describe('GET /api/learningobjectives', function() {

    it('should route to learningobjective.controller.index', function() {
      routerStub.get
        .withArgs('/', 'learningobjectiveCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/learningobjectives/:id', function() {

    it('should route to learningobjective.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'learningobjectiveCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/learningobjectives', function() {

    it('should route to learningobjective.controller.create', function() {
      routerStub.post
        .withArgs('/', 'learningobjectiveCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/learningobjectives/:id', function() {

    it('should route to learningobjective.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'learningobjectiveCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/learningobjectives/:id', function() {

    it('should route to learningobjective.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'learningobjectiveCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/learningobjectives/:id', function() {

    it('should route to learningobjective.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'learningobjectiveCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
