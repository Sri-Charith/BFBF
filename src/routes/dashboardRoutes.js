import { Router } from 'express';
import { getDashboard } from '../controllers/dashboardController.js';

const router = Router();

// GET /api/districts/:districtId/dashboard?year=YYYY-YYYY&metrics=a,b,c,d,e
router.get('/districts/:districtId/dashboard', getDashboard);

export default router;


