import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
  headers: {
    Accept: 'application/json; charset=utf-8',
  },
});
