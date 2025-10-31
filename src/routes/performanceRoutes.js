import { Router } from 'express';
import { getPerformanceController } from '../controllers/performanceController.js';

const router = Router();

router.get('/', getPerformanceController);

export default router;


