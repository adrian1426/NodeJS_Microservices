const express = require('express');
const app = express();

const response = {
  data: [],
  service: 'car-services',
  architecture: 'microservices'
};

const logger = (message) => {
  console.log('[car-services]: ', message);
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get('/api/v1/cars', (req, res) => {
  response.data.push('BMW', 'Toyota', 'Honda');
  logger('Get Cars data');
  return res.send(response);
});

module.exports = app;