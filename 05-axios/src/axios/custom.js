import axios from 'axios';

export const authFetch = axios.create({
  baseURL: 'https://www.course-api.com',
  headers: {
    Accept: 'application/json',
  },
});
