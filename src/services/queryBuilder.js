// Build dynamic WHERE clause and params from flexible filters
// Supported keys: year (fin_year), district (district_name), state (state_name)
export const buildWhere = (filters = {}) => {
  const where = [];
  const params = [];

  if (filters.year) {
    params.push(filters.year);
    where.push(`"fin_year" = $${params.length}`);
  }
  if (filters.district) {
    params.push(filters.district);
    where.push(`"district_name" = $${params.length}`);
  }
  if (filters.state) {
    params.push(filters.state);
    where.push(`"state_name" = $${params.length}`);
  }

  return {
    sql: where.length ? `WHERE ${where.join(' AND ')}` : '',
    params
  };
};


