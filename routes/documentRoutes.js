const express = require('express');
const bodyParser = require('body-parser');

const documentRouter = express.Router();

documentRouter.use(bodyParser.json());
documentRouter.use(bodyParser.urlencoded({ extended: false }));

const getDocuments = require('../utils/documentUtils');
const addDocument = require('../utils/documentUtils');

const firebase = require('firebase/app');
require('firebase/auth');

const config = require('../config/firebase');

firebase.initializeApp(config);

let uid;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // Can get user UID here
    console.log('User is signed in');
    uid = user.uid;
  } else {
    console.log('No user is signed in');
    uid = uid;
  }
});

documentRouter.get('/user/documents', (req, res) => {
  let result;
  let docArr = [];
  getDocuments().then(response => {
    const properties = Object.values(response.data);
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].uid === uid) {
        docArr.push(properties[i]);
        result = docArr;
      } else {
        result = 'No matching documents for this user';
      }
    }
    res.send(result);
  });
});

documentRouter.post('/document/new', (req, res) => {
  const document = req.body;
  addDocument(document.content, document.changes, document.branch);
  res.send('added document');
});

module.exports = documentRouter;
