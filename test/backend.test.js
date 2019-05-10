const app = require('../index.js');
const request = require('supertest');
const assert = require('assert');
const expect = require('chai').expect;

const mockResponse = '{ "name":"test" }';

// describe('backend functionality', () => {
//   it('should return OK status', function() {
//     return request(app)
//       .get('/')
//       .then(response => {
//         assert.equal(response.status, 200);
//       });
//   });
//   it('should allow user to fetch their documents', () => {
//     return request(app)
//       .get('/user/documents')
//       .then(response => {
//         assert.equal(response.status, 200);
//         assert.equal(response.text, mockResponse);
//       });
//   });
//   it('should allow user to upload file to documents', () => {
//     return request(app)
//       .post('/document/new')
//       .then(response => {
//         assert.equal(response.status, 200);
//         assert.equal(response.text, mockResponse);
//       });
//   });
//   it('should return the correct structure of data for each document', () => {
//     assert.equal(true, false);
//   });
//   it('should return the difference between the file uploaded and the previous version', () => {
//     assert.equal(true, false);
//   });
//   it('should show conflicts in a document', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to update a version', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to delete a version', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to read all versions of a document', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to give access to other users to the document', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to branch off from a specific version', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to merge two branches', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to get the latest version from any branch', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to make suggestions and comments when updating document', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to make an account with an email and password', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to add a profile picture', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to update their password', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to delete their account', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to delete documents', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to remove members from groups', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to add members to groups', () => {
//     assert.equal(true, false);
//   });
//   it('should allow the user to specify levels of access to a document', () => {
//     assert.equal(true, false);
//   });
// });
