export const toNumber = (v) => (v === null || v === undefined ? 0 : Number(v));
export const pct = (num, den) => (den > 0 ? (num / den) * 100 : 0);

export const getPreviousFinYear = (finYear) => {
  // Expect format YYYY-YYYY
  if (!finYear) return null;
  const m = /^(\d{4})[-/](\d{4})$/.exec(finYear);
  if (!m) return null;
  const start = parseInt(m[1], 10) - 1;
  const end = parseInt(m[2], 10) - 1;
  return `${start}-${end}`;
};

export const formatChangePct = (valueNow, valuePrev) => {
  const change = pct(valueNow - valuePrev, valuePrev);
  const signed = (change >= 0 ? '+' : '') + change.toFixed(1) + '%';
  return signed;
};


