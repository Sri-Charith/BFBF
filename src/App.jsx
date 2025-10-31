import Dashboard from './pages/Dashboard.jsx';
import { AppThemeProvider } from './theme/muiTheme.jsx';

const App = () => (
  <AppThemeProvider>
    <Dashboard />
  </AppThemeProvider>
);

export default App;

