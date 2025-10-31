import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const AppThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }), []);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'dark' ? '#0f172a' : '#fafafa',
        paper: mode === 'dark' ? '#111827' : '#ffffff'
      },
      primary: { main: mode === 'dark' ? '#90caf9' : '#1976d2' }
    },
    shape: { borderRadius: 14 },
    typography: {
      fontFamily: 'Inter, Roboto, Arial, sans-serif',
      h5: { fontWeight: 700 },
      subtitle2: { letterSpacing: 0.2 }
    },
    components: {
      MuiCard: {
        defaultProps: { elevation: 1 },
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            borderRadius: 14,
            boxShadow: mode === 'dark' ? '0 2px 10px rgba(0,0,0,0.35)' : '0 2px 10px rgba(0,0,0,0.08)'
          }
        }
      },
      MuiPaper: { defaultProps: { elevation: 1 } },
      MuiTooltip: {
        styleOverrides: {
          tooltip: { fontSize: 12 }
        }
      }
    }
  }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

AppThemeProvider.propTypes = { children: PropTypes.node };


