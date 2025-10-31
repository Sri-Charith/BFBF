import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const LineChartCard = ({ title, data, xKey, yKeys }) => (
  <Card elevation={2} sx={{ height: 360 }}>
    <CardContent sx={{ height: '100%' }}>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>{title}</Typography>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {yKeys.map((k, i) => (
            <Line key={k} type="monotone" dataKey={k} stroke={["#8884d8","#82ca9d","#ff7300"][i%3]} dot={false} />
          ))}
        </LineChart>
      </ResponsiveContainer>
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


