import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import Box from '@mui/material/Box';

const AreaChartCard = ({ title, data, xKey, yKey, color }) => (
  <Card elevation={2} sx={{ minHeight: 320 }}>
    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>{title}</Typography>
      <Box sx={{ width: '100%', minWidth: 0, height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 8 }}>
            <defs>
              <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color || '#8884d8'} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={color || '#8884d8'} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} interval={0} angle={0} height={36} tickMargin={8} />
            <YAxis width={56} tickMargin={8} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey={yKey} stroke={color || '#8884d8'} fillOpacity={1} fill="url(#areaColor)" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </CardContent>
  </Card>
);

AreaChartCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  xKey: PropTypes.string.isRequired,
  yKey: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default AreaChartCard;


