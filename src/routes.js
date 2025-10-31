import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import StateView from './pages/Compare.jsx';
import Insights from './pages/Insights.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/state" element={<StateView />} />
    <Route path="/insights" element={<Insights />} />
  </Routes>
);

export default AppRoutes;


