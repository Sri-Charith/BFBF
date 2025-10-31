export const METRIC_CATEGORIES = {
  Employment: [
    'Average_days_of_employment_provided_per_Household',
    'Total_Individuals_Worked',
    'Number_of_Completed_Works',
    'Number_of_Ongoing_Works',
    'Total_No_of_Works_Takenup'
  ],
  Funds: [
    'Approved_Labour_Budget',
    'Total_Exp',
    'Material_and_skilled_Wages',
    'Wages'
  ],
  Inclusivity: [
    'SC_persondays',
    'ST_persondays',
    'Women_Persondays'
  ],
  Efficiency: [
    'Average_Wage_rate_per_day_per_person',
    'percentage_payments_gererated_within_15_days'
  ]
};

export const AVG_METRICS = new Set([
  'Average_days_of_employment_provided_per_Household',
  'Average_Wage_rate_per_day_per_person',
  'percentage_payments_gererated_within_15_days'
]);

export const ALLOWED_METRICS = new Set(
  Array.from(new Set(Object.values(METRIC_CATEGORIES).flat()))
);


