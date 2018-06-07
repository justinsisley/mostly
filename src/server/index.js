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
app.use(helmet()); // Basic security for Express
app.use(morgan(isProd ? 'common' : 'dev')); // Basic logging
app.use(express.json()); // Parse JSON in request bodies

if (isProd) {
  app.use('/api', api); // Handle all "/api" paths
  app.use(express.static('dist/client')); // Serve static assets for the client

  // Send index.html for all unhandled requests
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });
} else {
  // In non-production environments, handle API endpoints in a "hot-reloading"
  // friendly way by requiring a fresh `api.js` module on every API request.
  app.use('/api', (req, res, next) => {
    // eslint-disable-next-line global-require
    require('./api').default(req, res, next);
  });

  // Start the "hot-reloading" watcher
  hot.start();
}

// Global error handling for uncaught errors
app.use(handleErrors);

// Start the server
app.listen(port);
