const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

const config = require('./config/firebase');

let uid;

firebase.initializeApp(config);

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

const addDocument = (file, changes, branch) => {
  try {
    return axios.post('https://scribe-aac31.firebaseio.com/documents.json', {
      uid: uid,
      content: file,
      changes: changes,
      branch: branch
    });
  } catch (error) {
    console.error(error);
  }
};

const getDocuments = () => {
  try {
    return axios.get('https://scribe-aac31.firebaseio.com/documents.json');
  } catch (error) {
    console.error(error);
  }
};

const updateUsers = user => {
  try {
    return axios.post('https://scribe-aac31.firebaseio.com/users.json', user);
  } catch (error) {
    console.error(error);
  }
};

const register = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Create a new user in database
      updateUsers(user);
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/user/documents', (req, res) => {
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

app.post('/register', (req, res) => {
  const user = req.body;
  register(user.email, user.password);
  res.send('Account created');
});

app.get('/login', (req, res) => {
  firebase
    .auth()
    .signInWithEmailAndPassword('example@website.org', 'password')
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
  res.send('Logged in');
});

app.post('/new/document', (req, res) => {
  const document = req.body;
  addDocument(document.content, document.changes, document.branch);
  res.send('added document');
});

app.listen(port);

module.exports = app;
