import api from './axiosInstance.js';

export const getMetrics = (params = {}) => api.get('/metrics', { params }).then(r => r.data?.data ?? r.data);
export const getYears = (params = {}) => api.get('/years', { params }).then(r => r.data?.data ?? r.data);
export const getDistricts = (params = {}) => api.get('/districts', { params }).then(r => r.data?.data ?? r.data);

export const getPerformance = (params = {}) => api.get('/performance', { params }).then(r => r.data?.data ?? r.data);
export const getCompare = (params = {}) => api.get('/compare', { params }).then(r => r.data?.data ?? r.data);
export const getTrend = (params = {}) => api.get('/trend', { params }).then(r => r.data?.data ?? r.data);
export const getStateSummary = (params = {}) => api.get('/state-summary', { params }).then(r => r.data?.data ?? r.data);
export const getInsights = (params = {}) => api.get('/insights', { params }).then(r => r.data?.data ?? r.data);

export const getDashboard = ({ districtId, ...params }) =>
  api.get(`/api/districts/${encodeURIComponent(districtId)}/dashboard`, { params })
     .then(r => r.data?.data ?? r.data);


