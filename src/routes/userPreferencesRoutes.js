import { Router } from 'express';
import { saveUserPreferences } from '../controllers/userPreferencesController.js';

const router = Router();

// POST /api/users/:userId/preferences
router.post('/users/:userId/preferences', saveUserPreferences);

export default router;


