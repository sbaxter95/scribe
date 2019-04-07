const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
