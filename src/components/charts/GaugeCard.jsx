import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const GaugeCard = ({ title, value }) => (
  <Card elevation={2}>
    <CardContent>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>{title}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <LinearProgress variant="determinate" value={Math.max(0, Math.min(100, Number(value) || 0))} />
        </Box>
        <Typography variant="body2">{Math.round(Number(value) || 0)}%</Typography>
      </Box>
    </CardContent>
  </Card>
);

GaugeCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default GaugeCard;


