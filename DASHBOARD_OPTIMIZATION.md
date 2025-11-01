# Dashboard Performance Optimization

## Overview
The `buildDashboard()` function has been optimized from **15+ sequential database queries** down to **just 2 queries** using batched SQL with CTEs (Common Table Expressions) and in-memory caching.

## Performance Improvement

### Before (Original Implementation)
- **Query Count**: 15+ queries
  1. 1 query to get state for district
  2. 5 queries for current year values (one per metric)
  3. 5 queries for previous year values (one per metric)  
  4. 5 queries for rankings (one per metric)
- **Execution**: Sequential (N+1 problem)
- **Estimated Time**: ~7-10 seconds
- **Database Load**: High (15+ round trips)

### After (Optimized Implementation)
- **Query Count**: 2 queries
  1. 1 query to get state (required for rank calculations)
  2. 1 batched SQL query using CTEs that fetches all metrics, values, and ranks
- **Execution**: Near-parallel with CTEs
- **Estimated Time**: ~0.5-1.5 seconds (85-90% faster)
- **Database Load**: Minimal (2 round trips)
- **Cache Hit**: <10ms (in-memory cache with 120s TTL)

## Implementation Details

### Single Batched SQL Query Structure

The optimized query uses PostgreSQL CTEs to:
1. **Filter current year data** for the district
2. **Filter previous year data** (if available) for the district
3. **Calculate ranks** for all 5 metrics in separate CTEs (parallel execution)
4. **Aggregate values** for current and previous years
5. **Join all results** in a single SELECT

### Caching Strategy

- **Type**: In-memory cache with TTL
- **TTL**: 120 seconds (2 minutes)
- **Cache Key**: `dashboard:{district}:{year}:{metrics}`
- **Benefits**: 
  - Subsequent requests with same parameters return instantly
  - Reduces database load significantly
  - Automatic expiration prevents stale data

### Example Query Structure

```sql
WITH 
  current_year_data AS (...),
  prev_year_data AS (...),
  rank_0 AS (...),  -- Rank for metric 1
  rank_1 AS (...),  -- Rank for metric 2
  rank_2 AS (...),  -- Rank for metric 3
  rank_3 AS (...),  -- Rank for metric 4
  rank_4 AS (...),  -- Rank for metric 5
  metric_values AS (...)
SELECT 
  mv.value_now_0, mv.value_prev_0, r0.rnk as rank_0,
  mv.value_now_1, mv.value_prev_1, r1.rnk as rank_1,
  -- ... etc for all 5 metrics
FROM metric_values mv
LEFT JOIN rank_0 r0 ON ...
LEFT JOIN rank_1 r1 ON ...
-- ... etc
```

## Return Format

The function returns clean JSON:

```javascript
{
  district: "Siddipet",
  state: "Telangana",
  year: "2025-2026",
  metrics: [
    { 
      name: "Total_Exp", 
      value: 1200, 
      change_vs_last_year: "+20.0%", 
      rank_in_state: 1 
    },
    { 
      name: "Average_Wage_rate_per_day_per_person", 
      value: 250, 
      change_vs_last_year: "+5.2%", 
      rank_in_state: 3 
    },
    // ... 3 more metrics
  ]
}
```

## Usage

No API changes required - the function signature remains the same:

```javascript
const result = await buildDashboard({
  districtId: "Siddipet",
  year: "2025-2026",
  metrics: ["Total_Exp", "Wages", ...] // Optional, defaults to 5 metrics
});
```

## Performance Testing

To verify the improvement:

1. **Before optimization**: Check backend logs for query count
2. **After optimization**: Single batched query visible in logs
3. **Cache hits**: Subsequent identical requests should be <10ms
4. **Monitor**: Check Neon dashboard for query execution time

## Future Enhancements

Potential further optimizations:
- [ ] Combine state query into main CTE (1 query instead of 2)
- [ ] Add Redis cache for distributed systems
- [ ] Add database indexes on `(district_name, fin_year)` and `(state_name, fin_year)`
- [ ] Implement query result pagination for large datasets

## Files Modified

- `backend/src/services/dashboardService.js` - Main optimization
- `backend/src/utils/cache.js` - New caching utility

