const server = require('./src/app');

server.listen(process.env.PORT, () => {
  console.log('User-Service listening on port ' + process.env.PORT);
});