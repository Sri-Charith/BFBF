import asyncHandler from '../middleware/asyncHandler.js';
import { ok, badRequest } from '../utils/response.js';
import { getPerformanceForDistrictYear } from '../services/performanceService.js';

export const getPerformance = asyncHandler(async (req, res) => {
  const { district, year } = req.query;
  if (!district || !year) return badRequest(res, 'district and year are required');
  const performance = await getPerformanceForDistrictYear(district, year);
  return ok(res, { district, year, performance });
});


