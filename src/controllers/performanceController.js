import asyncHandler from '../middleware/asyncHandler.js';
import { ok } from '../utils/response.js';
import { getPerformance } from '../services/performanceService.js';

export const getPerformanceController = asyncHandler(async (req, res) => {
  const { year, district, state } = req.query;
  const filters = { year, district, state };
  const result = await getPerformance(filters);
  console.log('Performance controller - result type:', Array.isArray(result) ? 'array' : typeof result);
  console.log('Performance controller - result length:', Array.isArray(result) ? result.length : 'N/A');
  if (Array.isArray(result) && result.length > 0) {
    console.log('Performance controller - first result keys:', Object.keys(result[0]).slice(0, 10));
  }
  return ok(res, result);
});


