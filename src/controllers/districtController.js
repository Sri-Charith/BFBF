import asyncHandler from '../middleware/asyncHandler.js';
import { ok } from '../utils/response.js';
import { getDistrictList } from '../services/performanceService.js';

export const listDistricts = asyncHandler(async (req, res) => {
  const districts = await getDistrictList();
  return ok(res, districts);
});


