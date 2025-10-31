import { Router } from 'express';
import { listYears } from '../controllers/yearController.js';

const router = Router();

router.get('/', listYears);

export default router;


