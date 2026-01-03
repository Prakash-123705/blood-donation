// FORCE correct backend URLs
const API_BASE_URL =
  window.location.port === "5500" || window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://blood-donation-1-7x80.onrender.com";

const API_ENDPOINTS = {
  SIGNUP: `${API_BASE_URL}/api/auth/signup`,
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  DONOR_ADD: `${API_BASE_URL}/api/donor/add`,
  DONOR_SEARCH: `${API_BASE_URL}/api/donor/search`
};

console.log("API_BASE_URL:", API_BASE_URL);
