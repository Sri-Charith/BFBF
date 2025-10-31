import { Router } from 'express';
import { listDistricts } from '../controllers/districtController.js';

const router = Router();

router.get('/', listDistricts);

export default router;


