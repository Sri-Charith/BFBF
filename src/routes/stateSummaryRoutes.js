import { Router } from 'express';
import { stateSummary } from '../controllers/stateSummaryController.js';

const router = Router();

router.get('/', stateSummary);

export default router;


