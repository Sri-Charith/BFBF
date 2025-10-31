import { Router } from 'express';
import { metrics } from '../controllers/metricController.js';

const router = Router();

router.get('/', metrics);

export default router;


