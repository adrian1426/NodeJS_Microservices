const express = require('express');
const app = express();

const response = {
  data: [],
  service: 'user-services',
  architecture: 'microservices'
};

const logger = (message) => {
  console.log('[user-services]: ', message);
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get('/api/v1/users', (req, res) => {
  response.data.push('Kawaki', 'mitsuki', 'kurenai');
  logger('Get Users data');
  return res.send(response);
});

module.exports = app;