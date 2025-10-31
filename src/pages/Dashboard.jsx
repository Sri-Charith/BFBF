import React, { useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import DashboardCards from '../components/DashboardCards.jsx';
import LineChartCard from '../components/charts/LineChartCard.jsx';
import BarChartCard from '../components/charts/BarChartCard.jsx';
import PieChartCard from '../components/charts/PieChartCard.jsx';
import GaugeCard from '../components/charts/GaugeCard.jsx';
import AreaChartCard from '../components/charts/AreaChartCard.jsx';
import ComposedChartCard from '../components/charts/ComposedChartCard.jsx';
import Loader from '../components/Loader.jsx';
import { getDashboard, getTrendsMulti, getDistricts, getYears, getInsights, getPerformance } from '../api/metricsAPI';

const DEFAULT_DISTRICT = 'Siddipet';
const DEFAULT_YEAR = '2025-2026';
const MONTHS = ['All','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];

// Metrics for composed chart only (faster loading)
const COMPOSED_CHART_METRICS = [
  'Total_Exp',
  'Wages',
  'Material_and_skilled_Wages',
  'Number_of_Completed_Works'
];

const METRIC_LABELS = {
  Total_Exp: 'Total Expenditure',
  Wages: 'Wage Expenditure',
  Material_and_skilled_Wages: 'Material & Skilled Wages',
  Number_of_Completed_Works: 'Completed Works',
  Number_of_Ongoing_Works: 'Ongoing Works',
  Total_Households_Worked: 'Total Households Worked',
  Average_days_of_employment_provided_per_Household: 'Avg. Days of Employment/HH',
  Average_Wage_rate_per_day_per_person: 'Average Wage Rate per Person per Day',
  percentage_payments_gererated_within_15_days: 'Payments within 15 Days (%)',
  percent_of_Expenditure_on_Agriculture_Allied_Works: 'Agri & Allied Expenditure (%)',
  percent_of_NRM_Expenditure: 'NRM Expenditure (%)',
  percent_of_Category_B_Works: 'Category B Works (%)',
  Differently_abled_persons_worked: 'Differently Abled Persons Worked'
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [districts, setDistricts] = useState([]);
  const [years, setYears] = useState([]);
  const [district, setDistrict] = useState(DEFAULT_DISTRICT);
  const [year, setYear] = useState(DEFAULT_YEAR);
  const [month, setMonth] = useState('All');

  const [cards, setCards] = useState([]);
  const [trend, setTrend] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [areaData, setAreaData] = useState([]);
  const [composedChartData, setComposedChartData] = useState([]);
  const [performanceRow, setPerformanceRow] = useState({});
  const [insights, setInsights] = useState({});

  const formatLabel = (s) => {
    if (!s) return '';
    const withSpaces = String(s).replaceAll('_', ' ');
    return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
  };

  useEffect(() => {
    async function prime() {
      const [d, y] = await Promise.all([
        getDistricts().catch(() => []),
        getYears().catch(() => [])
      ]);
      setDistricts(Array.isArray(d) ? d : (d?.data || []));
      setYears(Array.isArray(y) ? y : (y?.data || []));
    }
    prime();
  }, []);

  const loadData = async (selDistrict, selYear) => {
    setLoading(true);
    try {
      const [dash, ins, perf, trendMultiResult] = await Promise.all([
        getDashboard({ districtId: selDistrict, year: selYear }),
        getInsights({ district: selDistrict, year: selYear }),
        getPerformance({ district: selDistrict, year: selYear }),
        getTrendsMulti({ metrics: COMPOSED_CHART_METRICS, district: selDistrict }).catch(() => ({ data: [] }))
      ]);

      // Transform multi-trend result to match expected format
      const trendAll = trendMultiResult?.data || [];

      const metrics = dash?.metrics || dash?.data?.metrics || [];
      setCards(metrics.map(m => ({
        title: METRIC_LABELS[m.name] || m.name,
        value: Math.round(Number(m.value || 0)),
        subtitle: `${m.change_vs_last_year || ''} • Rank ${m.rank_in_state || '-'}`
      })));

      setInsights(ins?.data?.insights || ins?.insights || {});

      // Use Total_Exp from trendAll for charts to avoid an extra request
      const totalExpSeries = (Array.isArray(trendAll) ? trendAll : []).find(s => s.metric === 'Total_Exp')?.data || [];
      const trSeries = totalExpSeries;
      setTrend(trSeries.map(r => ({ fin_year: r.fin_year ?? r['fin_year'], value: Number(r.value || 0) })));

      const inputs = ins?.data?.inputs || ins?.inputs || {};
      setPieData([
        { name: 'SC', value: Number(inputs.SC_persondays || 0) },
        { name: 'ST', value: Number(inputs.ST_persondays || 0) },
        { name: 'Women', value: Number(inputs.Women_Persondays || 0) }
      ]);

      const perfRow = Array.isArray(perf?.data) ? (perf.data[0] || {}) : (perf?.data || perf || {});
      setBarData([
        { name: 'Total_Exp', value: Number(perfRow.Total_Exp || 0) },
        { name: 'Wages', value: Number(perfRow.Wages || 0) },
        { name: 'Completed_Works', value: Number(perfRow.Number_of_Completed_Works || 0) },
        { name: 'Active_Workers', value: Number(perfRow.Total_No_of_Active_Workers || 0) || 0 }
      ]);
      setPerformanceRow(perfRow);

      setAreaData(trSeries.map(r => ({ fin_year: r.fin_year ?? r['fin_year'], Wages: Number(r.value || 0) })));

      // Build composed chart data: merge all metrics by year
      const seriesByMetric = Array.isArray(trendAll) ? trendAll : [];
      const allYears = Array.from(new Set(seriesByMetric.flatMap(s => (s.data || []).map(d => d.fin_year ?? d['fin_year'])))).sort();
      
      // Create maps for each metric
      const totalExpMap = new Map((seriesByMetric.find(s => s.metric === 'Total_Exp')?.data || []).map(d => [String(d.fin_year ?? d['fin_year']), Number(d.value || 0)]));
      const wagesMap = new Map((seriesByMetric.find(s => s.metric === 'Wages')?.data || []).map(d => [String(d.fin_year ?? d['fin_year']), Number(d.value || 0)]));
      const materialWagesMap = new Map((seriesByMetric.find(s => s.metric === 'Material_and_skilled_Wages')?.data || []).map(d => [String(d.fin_year ?? d['fin_year']), Number(d.value || 0)]));
      const completedWorksMap = new Map((seriesByMetric.find(s => s.metric === 'Number_of_Completed_Works')?.data || []).map(d => [String(d.fin_year ?? d['fin_year']), Number(d.value || 0)]));
      
      const composedData = allYears.map(year => ({
        fin_year: year,
        Total_Exp: totalExpMap.get(String(year)) || 0,
        Wages: wagesMap.get(String(year)) || 0,
        Material_Wages: materialWagesMap.get(String(year)) || 0,
        Completed_Works: completedWorksMap.get(String(year)) || 0
      }));
      setComposedChartData(composedData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(district, year);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gaugeValue = useMemo(() => {
    const fromInsights = Number(insights?.payment_timeliness_pct);
    if (Number.isFinite(fromInsights) && fromInsights >= 0) return fromInsights;
    const perfPct = Number(performanceRow?.percentage_payments_gererated_within_15_days);
    return Number.isFinite(perfPct) ? perfPct : 0;
  }, [insights, performanceRow]);

  const handleApply = () => {
    loadData(district, year);
  };

  if (loading) return <Loader />;

  return (
    <Box sx={{ p: { xs: 1.5, md: 3 } }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr auto' }, gap: 2, alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            TELANGANA STATE MNREGA REPORT
          </Typography>
          <Typography variant="body2" color="text.secondary">District performance overview</Typography>
        </Box>
        <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'flex-start', md: 'flex-end' }, flexWrap: 'wrap' }}>
          <FormControl size="small" sx={{ minWidth: 160 }}>
            <InputLabel><Typography variant="body2">District</Typography></InputLabel>
            <Select label="District" value={district} onChange={(e) => setDistrict(e.target.value)}>
              {(districts || []).map((d) => (<MenuItem key={d} value={d}><Typography variant="body2">{String(d).replaceAll('_',' ')}</Typography></MenuItem>))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel><Typography variant="body2">Year</Typography></InputLabel>
            <Select label="Year" value={year} onChange={(e) => setYear(e.target.value)}>
              {(years || []).map((y) => (<MenuItem key={y} value={y}><Typography variant="body2">{String(y).replaceAll('_',' ')}</Typography></MenuItem>))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel><Typography variant="body2">Month</Typography></InputLabel>
            <Select label="Month" value={month} onChange={(e) => setMonth(e.target.value)}>
              {MONTHS.map((m) => (<MenuItem key={m} value={m}><Typography variant="body2">{m}</Typography></MenuItem>))}
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleApply} disabled={!district || !year}><Typography variant="button">Apply</Typography></Button>
        </Stack>
      </Box>

      <Box sx={{ mb: 3 }}>
        <DashboardCards items={cards} />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2, mb: 3 }}>
        <Box sx={{ minWidth: 0, minHeight: 320 }}>
          <LineChartCard title={`Total_Exp Trend — ${district}`} data={trend} xKey="fin_year" yKeys={["value"]} />
        </Box>
        <Box sx={{ minWidth: 0, minHeight: 320 }}>
          <BarChartCard title="Key Metrics" data={barData} xKey="name" yKey="value" />
        </Box>
      </Box>

      {/* Highlighted KPI row: Wages next to Payment Timeliness */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2, mb: 3 }}>
        <Box sx={{ minWidth: 0, minHeight: 180 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <Typography variant="subtitle2" color="text.secondary">Wages</Typography>
              <Typography variant="h3" sx={{ mt: 0.5 }}>
                {performanceRow?.Wages ? Number(performanceRow.Wages).toLocaleString() : '—'}
              </Typography>
              <Typography variant="caption" color="text.secondary">Total wage expenditure for {year}</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ minWidth: 0, minHeight: 180 }}>
          <GaugeCard title="Payment Timeliness" value={gaugeValue} />
        </Box>
      </Box>

      {/* Composition row */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2, mb: 3 }}>
        <Box sx={{ minWidth: 0, minHeight: 300 }}>
          <PieChartCard title="Persondays Composition (SC / ST / Women)" data={pieData} dataKey="value" nameKey="name" />
        </Box>
        <Box sx={{ minWidth: 0, minHeight: 300 }}>
          <AreaChartCard title="Wages Area by Year" data={areaData} xKey="fin_year" yKey="Wages" />
        </Box>
      </Box>

      <Box sx={{ mb: 2 }}>
        <ComposedChartCard
          title={`Key Metrics Trend — ${String(district).replaceAll('_',' ')}`}
          data={composedChartData}
          xKey="fin_year"
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>Additional Key Indicators — {String(district).replaceAll('_',' ')} ({year})</Typography>
          <Box component="table" sx={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px' }}>
            <tbody>
              {[
                'Approved_Labour_Budget',
                'Differently_abled_persons_worked',
                'Material_and_skilled_Wages',
                'Number_of_GPs_with_NIL_exp',
                'Number_of_Ongoing_Works',
                'Persondays_of_Central_Liability_so_far',
                'SC_persondays',
                'SC_workers_against_active_workers',
                'ST_persondays',
                'ST_workers_against_active_workers',
                'Total_Adm_Expenditure',
                'Total_Individuals_Worked',
                'Total_No_of_Active_Job_Cards',
                'Total_No_of_Active_Workers',
                'Total_No_of_HHs_completed_100_Days_of_Wage_Employment',
                'Total_No_of_JobCards_issued',
                'Total_No_of_Workers',
                'Total_No_of_Works_Takenup',
                'Women_Persondays',
                'percent_of_Category_B_Works',
                'percent_of_Expenditure_on_Agriculture_Allied_Works',
                'percent_of_NRM_Expenditure',
                'percentage_payments_gererated_within_15_days',
                'Remarks'
              ].map((k) => {
                const label = METRIC_LABELS[k] || formatLabel(k);
                const raw = performanceRow?.[k];
                const display = (raw === null || raw === undefined || raw === '') ? '—' : String(raw);
                const descMap = {
                  percent_of_Expenditure_on_Agriculture_Allied_Works: 'Share of spending on agriculture and allied works within total expenditure.',
                  percent_of_NRM_Expenditure: 'Share of spending on Natural Resource Management (NRM).',
                  percent_of_Category_B_Works: 'Share of spending on Category B works.',
                  percentage_payments_gererated_within_15_days: 'Payments generated within 15 days of muster closure.',
                  Average_days_of_employment_provided_per_Household: 'Average employment days provided per household.',
                  Differently_abled_persons_worked: 'Count of differently abled individuals who worked.',
                  Material_and_skilled_Wages: 'Expenditure on materials and skilled wages.',
                  Number_of_Ongoing_Works: 'Works currently in progress.',
                  Number_of_Completed_Works: 'Works completed in the period.'
                };
                const desc = descMap[k] || '';
                return (
                  <tr key={k}>
                    <td style={{ width: 360, padding: '8px 12px' }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{label}</Typography>
                      <Typography variant="caption" color="text.secondary">{desc}</Typography>
                    </td>
                    <td style={{ textAlign: 'right', padding: '8px 12px' }}>
                      <Typography variant="body1">{display.replaceAll('_',' ')}</Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="outlined"><Typography variant="button">Get detailed columns</Typography></Button>
      </Box>
    </Box>
  );
}
