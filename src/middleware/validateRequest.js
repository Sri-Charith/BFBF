export const requireQuery = (keys) => (req, res, next) => {
  for (const k of keys) {
    if (!req.query[k]) {
      return res.status(400).json({ error: `${k} is required` });
    }
  }
  next();
};


