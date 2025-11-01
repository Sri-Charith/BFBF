import express from 'express';
import cors from 'cors';
import compression from 'compression';
import districtRoutes from './routes/districtRoutes.js';
import yearRoutes from './routes/yearRoutes.js';
import metricRoutes from './routes/metricRoutes.js';
import performanceRoutes from './routes/performanceRoutes.js';
import compareRoutes from './routes/compareRoutes.js';
import trendRoutes from './routes/trendRoutes.js';
import stateSummaryRoutes from './routes/stateSummaryRoutes.js';
import insightRoutes from './routes/insightRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import userPreferencesRoutes from './routes/userPreferencesRoutes.js';
import errorHandler from './utils/errorHandler.js';

const app = express();

// Middleware setup
app.use(cors());
app.use(compression()); // Enable gzip compression for responses
app.use(express.json({ limit: '10mb' })); // Add body size limit
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the state_data API' });
});

app.use('/districts', districtRoutes);
app.use('/years', yearRoutes);
app.use('/metrics', metricRoutes);
app.use('/performance', performanceRoutes);
app.use('/compare', compareRoutes);
app.use('/trend', trendRoutes);
app.use('/state-summary', stateSummaryRoutes);
app.use('/insights', insightRoutes);

// API prefixed routes for dashboard and preferences
app.use('/api', dashboardRoutes);
app.use('/api', userPreferencesRoutes);

app.use(errorHandler);

export default app;


