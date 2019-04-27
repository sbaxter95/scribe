const firebase = require('firebase/app');
const axios = require('axios');

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
      updateUsers(user.user);
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};

module.exports = register;
