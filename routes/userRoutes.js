const express = require('express');
const bodyParser = require('body-parser');

const userRouter = express.Router();

userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({ extended: false }));

const firebase = require('firebase/app');

const register = require('../utils/userUtils');

userRouter.post('/register', (req, res) => {
  const user = req.body;
  register(user.email, user.password);
  res.send('Account created');
});

userRouter.get('/login', (req, res) => {
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

module.exports = userRouter;
