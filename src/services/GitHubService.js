
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const getUsers = async (searchText) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${searchText}`);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
