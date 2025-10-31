import { Router } from 'express';
import { compareController } from '../controllers/compareController.js';

const router = Router();

router.get('/', compareController);

export default router;


