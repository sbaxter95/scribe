const express = require('express');
const bodyParser = require('body-parser');

const documentRouter = express.Router();

documentRouter.use(bodyParser.json());
documentRouter.use(bodyParser.urlencoded({ extended: false }));

const utils = require('../utils/documentUtils');

const firebase = require('firebase/app');
require('firebase/auth');

documentRouter.get('/user/documents', (req, res) => {
  let result;
  let docArr = [];
  utils.getDocuments().then(response => {
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
  utils.addDocument(
    firebase.auth().currentUser.uid,
    document.content,
    document.changes,
    document.branch
  );
  res.send('added document');
});

module.exports = documentRouter;
