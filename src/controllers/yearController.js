import asyncHandler from '../middleware/asyncHandler.js';
import { ok } from '../utils/response.js';
import { getYears } from '../services/performanceService.js';

export const listYears = asyncHandler(async (req, res) => {
  const years = await getYears();
  return ok(res, years);
});


