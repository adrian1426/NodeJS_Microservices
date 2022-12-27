const server = require('./src/app');

server.listen(process.env.PORT, () => {
  console.log('Cars-Service listening on port ' + process.env.PORT);
});