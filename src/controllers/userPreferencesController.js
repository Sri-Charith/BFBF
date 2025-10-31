import asyncHandler from '../middleware/asyncHandler.js';
import { ok, badRequest } from '../utils/response.js';
import { savePreferences } from '../services/userPreferencesService.js';

export const saveUserPreferences = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { metrics } = req.body || {};
  if (!userId) return badRequest(res, 'userId is required');
  if (!Array.isArray(metrics)) return badRequest(res, 'metrics array is required');
  const record = await savePreferences(userId, metrics);
  return ok(res, { userId: record.user_id, metrics: record.metrics });
});


