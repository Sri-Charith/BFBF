export const ok = (res, data = {}, status = 200) => {
  return res.status(status).json(data);
};

export const badRequest = (res, message = 'Bad request') => {
  return res.status(400).json({ error: message });
};


