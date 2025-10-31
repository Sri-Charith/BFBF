import asyncHandler from '../middleware/asyncHandler.js';
import { ok, badRequest } from '../utils/response.js';
import { getTrend } from '../services/trendService.js';

export const trend = asyncHandler(async (req, res) => {
  const { district, metric } = req.query;
  if (!district || !metric) return badRequest(res, 'district and metric are required');
  const series = await getTrend(district, metric);
  return ok(res, { district, metric, series });
});


