import path from 'path';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import api from './api';
import { isProd, port } from './constants/env';
import { handleErrors } from './utils/errors';
import hot from './utils/hot';

const app = express();

// Middleware
app.use(helmet());
app.use(morgan(isProd ? 'common' : 'dev'));
app.use(express.json());

if (isProd) {
  app.use('/api', api);
  app.use(express.static('dist/client'));

  // Send index.html for all unhandled requests
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });
} else {
  // Handle API endpoints in a "hot-reloading" friendly way by requiring a
  // fresh module on every request.
  app.use('/api', (req, res, next) => {
    // eslint-disable-next-line global-require
    require('./api').default(req, res, next);
  });

  // Start the "hot-reloading" watcher
  hot.start();
}

// Global error handling
app.use(handleErrors);

// Start the server
app.listen(port);
