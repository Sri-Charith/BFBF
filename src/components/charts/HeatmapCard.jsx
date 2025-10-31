import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';

const getColor = (v) => {
  // v expected 0..1; map to a blue-green scale
  const t = Number.isFinite(v) ? Math.min(1, Math.max(0, v)) : 0;
  const r = Math.round(0 + (34 - 0) * t);
  const g = Math.round(99 + (197 - 99) * t);
  const b = Math.round(210 + (94 - 210) * t);
  return `rgb(${r}, ${g}, ${b})`;
};

const HeatmapCard = ({ title, rows, cols, values, formatValue, subtitle }) => (
  <Card elevation={2} sx={{ minHeight: 360 }}>
    <CardContent>
      <Typography variant="subtitle1" sx={{ mb: 0.5, fontWeight: 600 }}>{title}</Typography>
      {subtitle ? (
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>{subtitle}</Typography>
      ) : null}

      <Box sx={{ overflowX: 'auto' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: `180px repeat(${cols.length}, 1fr)`, gap: 0.5 }}>
          <Box />
          {cols.map((c) => (
            <Box key={c} sx={{ textAlign: 'center', py: 0.5 }}>
              <Typography variant="caption" color="text.secondary">{String(c).replaceAll('_',' ')}</Typography>
            </Box>
          ))}
          {rows.map((rLabel, rIdx) => (
            <Box key={`row-${rLabel}`} sx={{ display: 'contents' }}>
              <Box sx={{ pr: 1, alignSelf: 'center' }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>{String(rLabel).replaceAll('_',' ')}</Typography>
              </Box>
              {cols.map((c, cIdx) => {
                const v = values[rIdx]?.[cIdx];
                const color = getColor(v?.norm);
                const display = formatValue ? formatValue(v?.raw) : (v?.raw ?? '—');
                return (
                  <Tooltip key={`${rLabel}-${c}`} title={`${rLabel} • ${c}: ${display}`} arrow>
                    <Box sx={{ height: 28, backgroundColor: color, borderRadius: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.9)', fontSize: 11 }}>
                      {Number.isFinite(v?.raw) ? '' : '—'}
                    </Box>
                  </Tooltip>
                );
              })}
            </Box>
          ))}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

HeatmapCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.string).isRequired,
  cols: PropTypes.arrayOf(PropTypes.string).isRequired,
  // values[r][c] = { raw: number | null, norm: number 0..1 }
  values: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({ raw: PropTypes.number, norm: PropTypes.number }))).isRequired,
  formatValue: PropTypes.func
};

export default HeatmapCard;


