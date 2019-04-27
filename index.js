const express = require('express');
const app = express();

const userRouter = require('./routes/userRoutes');
const documentRouter = require('./routes/documentRoutes');

const port = 3001;

app.use(userRouter);
app.use(documentRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port);

module.exports = app;
