const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');

const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

const config = require('./config/firebase');

firebase.initializeApp(config);

const getDocuments = () => {
  try {
    return axios.get('https://scribe-aac31.firebaseio.com/documents.json');
  } catch (error) {
    console.error(error);
  }
};

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/user/documents', (req, res) => {
  getDocuments().then(response => {
    res.send(response.data);
  });
});

app.listen(port);

module.exports = app;
