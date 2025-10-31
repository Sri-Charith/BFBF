import asyncHandler from '../middleware/asyncHandler.js';
import { ok } from '../utils/response.js';
import { METRIC_CATEGORIES } from '../utils/constants.js';

export const metrics = asyncHandler(async (req, res) => {
  const { category } = req.query;
  const categories = METRIC_CATEGORIES;
  let data;
  if (category && categories[category]) {
    data = categories[category];
  } else {
    data = { categories, all: [...new Set(Object.values(categories).flat())] };
  }
  return ok(res, { filters: { category }, data });
});


