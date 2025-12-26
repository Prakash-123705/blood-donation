// API Configuration
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:5000'
  : 'https://blood-donation-1-7x80.onrender.com';

// API Endpoints
const API_ENDPOINTS = {
  SIGNUP: `${API_BASE_URL}/api/auth/signup`,
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  DONOR_ADD: `${API_BASE_URL}/api/donor/add`,
  DONOR_SEARCH: `${API_BASE_URL}/api/donor/search`
};

console.log('API_BASE_URL:', API_BASE_URL);
