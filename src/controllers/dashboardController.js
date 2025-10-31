import asyncHandler from '../middleware/asyncHandler.js';
import { ok, badRequest } from '../utils/response.js';
import { buildDashboard } from '../services/dashboardService.js';

export const getDashboard = asyncHandler(async (req, res) => {
  const { districtId } = req.params;
  const { year, metrics } = req.query;
  if (!year) return badRequest(res, 'year is required');

  let metricsList = [];
  if (metrics) {
    metricsList = String(metrics).split(',').map(s => s.trim()).filter(Boolean);
  }
  if (metricsList.length && metricsList.length !== 5) {
    return badRequest(res, 'Exactly 5 metrics must be provided when metrics param is used');
  }

  const data = await buildDashboard({ districtId, year, metrics: metricsList });
  return ok(res, data);
});


