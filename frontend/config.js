const API_BASE_URL = "https://blood-donation-1-7x8o.onrender.com";

const API_ENDPOINTS = {
  SIGNUP: `${API_BASE_URL}/api/auth/signup`,
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  DONOR_ADD: `${API_BASE_URL}/api/donor/add`,
  DONOR_SEARCH: `${API_BASE_URL}/api/donor/search`
};

console.log("API_BASE_URL:", API_BASE_URL);
