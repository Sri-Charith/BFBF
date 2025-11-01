import asyncHandler from '../middleware/asyncHandler.js';
import { ok, badRequest } from '../utils/response.js';
import { getTrend, getTrendsMulti } from '../services/trendService.js';

export const trend = asyncHandler(async (req, res) => {
  const { metric, district, state } = req.query;
  if (!metric) return badRequest(res, 'metric is required');
  const filters = { metric, district, state };
  const result = await getTrend(filters);
  return ok(res, result);
});

export const trendsMulti = asyncHandler(async (req, res) => {
  const { metrics, district, state } = req.query;
  if (!metrics) return badRequest(res, 'metrics parameter is required (comma-separated list)');
  
  const metricsArray = String(metrics)
    .split(',')
    .map(m => m.trim())
    .filter(Boolean);
  
  if (metricsArray.length === 0) {
    return badRequest(res, 'At least one metric must be provided');
  }
  
  const filters = { metrics: metricsArray, district, state };
  const result = await getTrendsMulti(filters);
  return ok(res, result);
});


