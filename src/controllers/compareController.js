import asyncHandler from '../middleware/asyncHandler.js';
import { ok } from '../utils/response.js';
import { compare } from '../services/compareService.js';

export const compareController = asyncHandler(async (req, res) => {
  const { districts, year, state } = req.query;
  const list = districts ? String(districts).split(',').map(s => s.trim()).filter(Boolean) : [];
  const filters = { districts: list, year, state };
  const result = await compare(filters);
  return ok(res, result);
});


