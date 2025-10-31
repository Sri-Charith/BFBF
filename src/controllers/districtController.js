import asyncHandler from '../middleware/asyncHandler.js';
import { ok } from '../utils/response.js';
import { getDistrictList } from '../services/performanceService.js';
import pool from '../config/db.js';

// This handles: GET /districts
export const listDistricts = asyncHandler(async (req, res) => {
  const { state } = req.query;
  const filters = { state };
  const data = await getDistrictList(filters);
  return ok(res, { filters, data });
});

// 2. ADD THIS ENTIRE FUNCTION
// This handles: GET /districts/:district_name
export const getDistrictDetails = asyncHandler(async (req, res) => {
  const { district_name } = req.params;
  
  // 3. Add the logic to get the data
  const query = 'SELECT * FROM state_data WHERE "district_name" = $1';
  const result = await pool.query(query, [district_name]);

  return ok(res, { filters: { district: district_name }, data: result.rows });
});
