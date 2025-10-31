export const toNumber = (v) => (v === null || v === undefined ? 0 : Number(v));
export const pct = (num, den) => (den > 0 ? (num / den) * 100 : 0);


