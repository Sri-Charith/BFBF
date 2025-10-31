import { Router } from 'express';
import { trend } from '../controllers/trendController.js';

const router = Router();

router.get('/', trend);

export default router;


