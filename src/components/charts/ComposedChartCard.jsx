import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { ResponsiveContainer, ComposedChart, Line, Bar, Area, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const ComposedChartCard = ({ title, data, xKey }) => (
  <Card elevation={2} sx={{ minHeight: 400 }}>
    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>{title}</Typography>
      <Box sx={{ width: '100%', minWidth: 0, height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 8 }}>
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} angle={0} height={36} tickMargin={8} />
            <YAxis yAxisId="left" width={56} tickMargin={8} />
            <YAxis yAxisId="right" orientation="right" width={56} tickMargin={8} />
            <Tooltip />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="Total_Exp" fill="url(#areaGradient)" stroke="#8884d8" name="Total Expenditure" />
            <Bar yAxisId="right" dataKey="Wages" fill="#82ca9d" name="Wages" />
            <Bar yAxisId="right" dataKey="Material_Wages" fill="#ffc658" name="Material & Skilled Wages" />
            <Line yAxisId="left" type="monotone" dataKey="Completed_Works" stroke="#ff7300" strokeWidth={2} dot={{ r: 4 }} name="Completed Works" />
          </ComposedChart>
        </ResponsiveContainer>
      </Box>
    </CardContent>
  </Card>
);

ComposedChartCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  xKey: PropTypes.string.isRequired
};

export default ComposedChartCard;

