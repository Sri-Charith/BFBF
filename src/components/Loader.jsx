import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const Loader = ({ size }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
    <CircularProgress size={size} />
  </Box>
);

Loader.propTypes = { size: PropTypes.number };
Loader.defaultProps = { size: 40 };

export default Loader;


