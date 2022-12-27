const express = require('express');
const app = express();

const response = {
  data: [],
  service: 'book-services',
  architecture: 'microservices'
};

const logger = (message) => {
  console.log('[book-services]: ', message);
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get('/api/v1/books', (req, res) => {
  response.data.push('Clean code', 'javascript', 'clean architecture');
  logger('Get Books data');
  return res.send(response);
});

module.exports = app;