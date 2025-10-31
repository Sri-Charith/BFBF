import asyncHandler from '../middleware/asyncHandler.js';
import { ok } from '../utils/response.js';
import { getInsights } from '../services/insightService.js';

export const insights = asyncHandler(async (req, res) => {
  const { year, district, state } = req.query;
  const filters = { year, district, state };
  const result = await getInsights(filters);
  return ok(res, result);
});


