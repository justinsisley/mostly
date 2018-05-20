import { Router } from 'express';
import { catchErrors, handleNotFound } from './utils/errors';
import usersHandler from './controllers/users';

const router = Router();

// Example path for `/api/users`
router.get('/users', catchErrors(usersHandler));

// Handle calls to non-existent API paths
router.use('*', handleNotFound);

export default router;
