const express = require('express');
const app = express();

const userRouter = require('./routes/userRoutes');
const documentRouter = require('./routes/documentRoutes');

const port = 3001;

app.use(userRouter);
app.use(documentRouter);

const firebase = require('firebase/app');
require('firebase/auth');

const config = require('./config/firebase');

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

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port);

module.exports = app;
