import asyncHandler from '../middleware/asyncHandler.js';
import { ok, badRequest } from '../utils/response.js';
import { getStateSummary } from '../services/stateSummaryService.js';

export const stateSummary = asyncHandler(async (req, res) => {
  const { year, metric, limit, state, district } = req.query;
  const filters = { year, metric, limit, state, district };
  const result = await getStateSummary(filters);
  return ok(res, result);
});


