import { Router } from 'express';
import { trend, trendsMulti } from '../controllers/trendController.js';

const router = Router();

router.get('/', trend);
router.get('/multi', trendsMulti);

export default router;


