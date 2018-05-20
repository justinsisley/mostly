// Wrapper function for route handlers that automatically catches errors
export function catchErrors(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

// Middleware for handling uncaught errors
// eslint-disable-next-line no-unused-vars
export function handleErrors(err, req, res, next) {
  if (err && err.stack) console.error(err.stack);

  res.status(500).json({});
}

// Handler for non-existent API routes
export function handleNotFound(req, res) {
  res.status(404).end();
}
