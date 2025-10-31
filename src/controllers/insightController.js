import asyncHandler from '../middleware/asyncHandler.js';
import { ok, badRequest } from '../utils/response.js';
import { getInsights } from '../services/insightService.js';

export const insights = asyncHandler(async (req, res) => {
  const { district, year } = req.query;
  if (!district || !year) return badRequest(res, 'district and year are required');
  const result = await getInsights(district, year);
  return ok(res, { district, year, ...result });
});


