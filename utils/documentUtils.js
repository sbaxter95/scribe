const axios = require('axios');

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

module.exports = (addDocument, getDocuments);
