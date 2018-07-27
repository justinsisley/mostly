import { Router } from 'express';
import { catchErrors, handleNotFound } from './utils/errors';
import sessionHandler from './controllers/session';

const router = Router();

// Example API to create a new session token
router.post('/session', catchErrors(sessionHandler));

// Handle calls to non-existent API paths
router.use('*', handleNotFound);

export default router;
