import { Router } from 'express';
// 1. Import BOTH controller functions
import { listDistricts, getDistrictDetails } from '../controllers/districtController.js';

const router = Router();

// This handles: GET http://localhost:4000/districts
router.get('/', listDistricts);

// 2. ADD THIS LINE
// This handles: GET http://localhost:4000/districts/Siddipet
router.get('/:district_name', getDistrictDetails);

export default router;