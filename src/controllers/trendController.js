import asyncHandler from '../middleware/asyncHandler.js';
import { ok, badRequest } from '../utils/response.js';
import { getTrend } from '../services/trendService.js';

export const trend = asyncHandler(async (req, res) => {
  const { metric, district, state } = req.query;
  if (!metric) return badRequest(res, 'metric is required');
  const filters = { metric, district, state };
  const result = await getTrend(filters);
  return ok(res, result);
});


