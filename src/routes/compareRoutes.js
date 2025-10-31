import { Router } from 'express';
import { compare } from '../controllers/compareController.js';

const router = Router();

router.get('/', compare);

export default router;


