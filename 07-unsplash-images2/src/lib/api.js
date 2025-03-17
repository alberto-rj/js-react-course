import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

const api = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Accept: 'application/json; charset=utf-8',
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export default api;
