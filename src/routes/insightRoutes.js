import { Router } from 'express';
import { insights } from '../controllers/insightController.js';

const router = Router();

router.get('/', insights);

export default router;


