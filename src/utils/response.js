export const ok = (res, data = {}, status = 200) => {
  return res.status(status).json({ success: true, data });
};

export const badRequest = (res, message = 'Bad request') => {
  return res.status(400).json({ success: false, message });
};


