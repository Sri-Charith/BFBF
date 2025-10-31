import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';

const DESCRIPTIONS = {
  Total_Exp: 'Total expenditure incurred under MGNREGA',
  Total_Households_Worked: 'Number of households that worked',
  Women_Persondays: 'Total women person-days generated',
  Wages: 'Wage expenditure paid',
  Total_No_of_Active_Workers: 'Active workers registered',
  Average_Wage_rate_per_day_per_person: 'Average daily wage rate',
  Number_of_Completed_Works: 'Works completed in the period'
};

const MetricCard = ({ title, value, subtitle }) => (
  <Tooltip title={DESCRIPTIONS[title] || title} arrow placement="top">
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">{title}</Typography>
        <Typography variant="h4" sx={{ mt: 0.5 }}>{value ?? '—'}</Typography>
        {subtitle ? <Typography variant="caption" color="text.secondary">{subtitle}</Typography> : null}
      </CardContent>
    </Card>
  </Tooltip>
);

MetricCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subtitle: PropTypes.string
};

const DashboardCards = ({ items }) => (
  <Box sx={{
    display: 'grid',
    gap: 2,
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)'
    }
  }}>
    {items.map((it) => (
      <Box key={it.title}>
        <MetricCard title={it.title} value={it.value} subtitle={it.subtitle} />
      </Box>
    ))}
  </Box>
);

DashboardCards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    subtitle: PropTypes.string
  })).isRequired
};

export default DashboardCards;


