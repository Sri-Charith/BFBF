import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <Box sx={{ width: 240, height: '100vh', position: 'fixed', left: 0, top: 0, borderRight: 1, borderColor: 'divider', p: 1 }}>
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/state">
          <ListItemText primary="State View" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/insights">
          <ListItemText primary="Insights" />
        </ListItemButton>
      </ListItem>
    </List>
    <Divider />
  </Box>
);

export default Sidebar;


