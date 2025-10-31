import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const LineChartCard = ({ title, data, xKey, yKeys }) => (
  <Card elevation={2} sx={{ minHeight: 360 }}>
    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>{title}</Typography>
      <Box sx={{ width: '100%', minWidth: 0, height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 8 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis width={56} tickMargin={8} />
            <Tooltip />
            <Legend />
            {yKeys.map((k, i) => (
              <Line key={k} type="monotone" dataKey={k} stroke={["#8884d8","#82ca9d","#ff7300"][i%3]} dot={false} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </CardContent>
  </Card>
);

LineChartCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  xKey: PropTypes.string.isRequired,
  yKeys: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default LineChartCard;


