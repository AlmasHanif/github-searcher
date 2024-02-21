import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com/users';

// Create an Axios instance with default headers
const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json', // Specify the API version
  },
});

const GitHubService = {
  searchUsers: async (query) => {
    return githubApi.get(`search/users?q=${query}`);
  },
  getUser: async (username) => {
    return githubApi.get(`/${username}`);
  },
};

export default GitHubService;