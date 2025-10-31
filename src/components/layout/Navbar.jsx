import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <AppBar position="fixed" color="default" elevation={0} sx={{ ml: '240px', borderBottom: 1, borderColor: 'divider' }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        MGNREGA Analytics Dashboard
      </Typography>
      <Box>
        <ThemeToggle />
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;


