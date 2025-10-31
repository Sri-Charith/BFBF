import asyncHandler from '../middleware/asyncHandler.js';
import { ok } from '../utils/response.js';
import { getPerformance } from '../services/performanceService.js';

export const getPerformanceController = asyncHandler(async (req, res) => {
  const { year, district, state } = req.query;
  const filters = { year, district, state };
  const result = await getPerformance(filters);
  return ok(res, result);
});


