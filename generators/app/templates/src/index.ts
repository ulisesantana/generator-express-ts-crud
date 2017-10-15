import * as http from 'http';
import app from './app';
import { mongoConfig } from './config';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const port = Number(process.env.PORT) || 3000;
app.set('port', port);

const server = http.createServer(app);
const mongoUri = 'mongodb://' +
  mongoConfig.user + (mongoConfig.pass ? ':' + mongoConfig.pass : '') +
  '@' + mongoConfig.host + ':' + mongoConfig.port + '/' + mongoConfig.db +
  (mongoConfig.authMechanism ? '?authMechanism=' + mongoConfig.authMechanism : '');
const mongoOptions = {
  useMongoClient: true
};
mongoose.connect(mongoUri, mongoOptions)
  .then(() => {
    console.log('Succesfully connected with MongoDB.');
    server.listen(port, () => {
      let addr = server.address();
      let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
      console.log(`Listening on ${bind}`);
    });
  })
  .catch((err) => {
    console.log('Not able to connect with MongoDB:', err)
  });

server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.syscall !== 'listen') throw error;
  let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});


