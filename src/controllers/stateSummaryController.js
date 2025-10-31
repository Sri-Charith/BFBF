import asyncHandler from '../middleware/asyncHandler.js';
import { ok, badRequest } from '../utils/response.js';
import { getStateSummary } from '../services/stateSummaryService.js';

export const stateSummary = asyncHandler(async (req, res) => {
  const { year, metric, limit, state } = req.query;
  if (!year) return badRequest(res, 'year is required');
  const result = await getStateSummary({ year, metric, limit, state });
  return ok(res, { year, metric, state: state || 'all', ...result });
});


