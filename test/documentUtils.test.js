const { assert } = require('chai');

const utils = require('../utils/documentUtils');

const mockRequest = {
  uid: '123456'
};

// All needs to be mocked

describe('getDocuments', () => {
  it('should have a 200 status', () => {
    return utils.getDocuments().then(response => {
      assert.equal(response.status, 200);
    });
  });
  it('should return an object', () => {
    return utils.getDocuments().then(response => {
      assert.isObject(response.data);
    });
  });
  it('should return at least one document object', () => {
    return utils.getDocuments().then(response => {
      const documents = Object.keys(response.data);
      assert.operator(documents.length, '>', 0);
    });
  });
  it('should have a valid document object', () => {
    return utils.getDocuments().then(response => {
      const documents = Object.keys(response.data);
      const firstDocument = response.data[documents[0]];
      assert.property(firstDocument, 'uid');
      assert.property(firstDocument, 'content');
      assert.property(firstDocument, 'branch');
    });
  });
});

describe('addDocument', () => {
  it('should have a 200 status', () => {
    return utils.addDocument().then(response => {
      assert.equal(response.status, 200);
    });
  });
  it('should have the correct response', () => {
    return utils.addDocument(mockRequest).then(response => {
      assert.equal(response.data, 'added document');
    });
  });
});
