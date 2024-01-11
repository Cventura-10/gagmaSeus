// src/services/authService.js
import axios from 'axios'

// Typically you'd have these endpoints and api url in a constants file or environment variables
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000'
const LOGIN_ENDPOINT = '/auth/login'
const REGISTER_ENDPOINT = '/auth/register'
const LOGOUT_ENDPOINT = '/auth/logout'

const authService = {
  // Login user
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}${LOGIN_ENDPOINT}`, {
        email,
        password,
      })

      if (response.data.accessToken) {
        // Store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    } catch (error) {
      throw error.response.data
    }
  },

  // Register a new user
  register: async (name, email, password) => {
    try {
      const response = await axios.post(`${API_URL}${REGISTER_ENDPOINT}`, {
        name,
        email,
        password,
      })
      return response.data
    } catch (error) {
      throw error.response.data
    }
  },

  // Logout the user
  logout: () => {
    // Remove user from local storage to log user out
    localStorage.removeItem('user')
    return axios.post(`${API_URL}${LOGOUT_ENDPOINT}`)
  },

  // Current user details from local storage
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'))
  },
}

export default authService
