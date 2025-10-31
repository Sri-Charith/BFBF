// Build base WHERE 1=1 with dynamic params; supports year/district/state
export const whereAndParams = (filters = {}, startIndex = 1) => {
  let where = 'WHERE 1=1';
  const params = [];
  let idx = startIndex;

  const normalize = (val) => {
    if (Array.isArray(val)) return val.filter(Boolean);
    if (typeof val === 'string' && val.includes(',')) {
      return val.split(',').map(s => s.trim()).filter(Boolean);
    }
    return val;
  };

  const addCond = (column, value) => {
    const v = normalize(value);
    if (v === undefined || v === null || v === '') return;
    if (Array.isArray(v)) {
      if (!v.length) return;
      const placeholders = v.map(() => `$${idx++}`).join(',');
      where += ` AND "${column}" IN (${placeholders})`;
      params.push(...v);
    } else {
      where += ` AND "${column}" = $${idx++}`;
      params.push(v);
    }
  };

  addCond('fin_year', filters.year);
  addCond('district_name', filters.district);
  addCond('state_name', filters.state);

  return { where, params, nextIndex: idx };
};


