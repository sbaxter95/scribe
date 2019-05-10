const axios = require('axios');
const uniqid = require('uniqid');

const addDocument = (uid, file, changes, branch) => {
  try {
    return axios.post('https://scribe-aac31.firebaseio.com/documents.json', {
      uid: uid,
      content: file,
      changes: changes,
      branch: branch,
      docid: uniqid()
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

module.exports.addDocument = addDocument;
module.exports.getDocuments = getDocuments;
