import { Router } from 'express';
import { getPerformance } from '../controllers/performanceController.js';

const router = Router();

router.get('/', getPerformance);

export default router;


