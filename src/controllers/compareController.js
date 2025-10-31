import asyncHandler from '../middleware/asyncHandler.js';
import { ok, badRequest } from '../utils/response.js';
import { compareTwoDistricts } from '../services/compareService.js';

export const compare = asyncHandler(async (req, res) => {
  const { district1, district2, year } = req.query;
  if (!district1 || !district2) return badRequest(res, 'district1 and district2 are required');
  const data = await compareTwoDistricts(district1, district2, year);
  return ok(res, { year: year || 'all', comparison_data: data });
});


