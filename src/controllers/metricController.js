import asyncHandler from '../middleware/asyncHandler.js';
import { ok } from '../utils/response.js';
import { METRIC_CATEGORIES } from '../utils/constants.js';

export const metrics = asyncHandler(async (req, res) => {
  const categories = METRIC_CATEGORIES;
  const all = [...new Set(Object.values(categories).flat())];
  return ok(res, { categories, all });
});


