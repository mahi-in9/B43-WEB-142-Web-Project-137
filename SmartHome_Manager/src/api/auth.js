import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Backend URL

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get user data (Protected Route)
export const getUserData = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: { "x-auth-token": token },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
