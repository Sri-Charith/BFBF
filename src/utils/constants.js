export const METRIC_CATEGORIES = {
  Employment: [
    'Average_days_of_employment_provided_per_Household',
    'Total_Individuals_Worked',
    'Total_Households_Worked',
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
    'Women_Persondays',
    'Differently_abled_persons_worked'
  ],
  Efficiency: [
    'Average_Wage_rate_per_day_per_person',
    'percentage_payments_gererated_within_15_days'
  ],
  Composition: [
    'percent_of_Expenditure_on_Agriculture_Allied_Works',
    'percent_of_NRM_Expenditure',
    'percent_of_Category_B_Works'
  ]
};

export const AVG_METRICS = new Set([
  'Average_days_of_employment_provided_per_Household',
  'Average_Wage_rate_per_day_per_person',
  'percentage_payments_gererated_within_15_days',
  'percent_of_Expenditure_on_Agriculture_Allied_Works',
  'percent_of_NRM_Expenditure',
  'percent_of_Category_B_Works'
]);

export const ALLOWED_METRICS = new Set(
  Array.from(new Set(Object.values(METRIC_CATEGORIES).flat()))
);

// Default 5 KPIs for dashboard
export const DEFAULT_DASHBOARD_METRICS = [
  'Total_Exp',
  'Average_Wage_rate_per_day_per_person',
  'Number_of_Completed_Works',
  'Total_Households_Worked',
  'Average_days_of_employment_provided_per_Household'
];


