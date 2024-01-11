// src/services/userService.js
import axios from 'axios'

const API_ENDPOINT = '/api/users'

export const fetchUsers = () => {
  return axios.get(API_ENDPOINT).then((response) => response.data)
}

// ... any other user-related service operations (create, update, delete)
