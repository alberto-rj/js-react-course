import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.thecocktaildb.com',
  headers: {
    Accept: 'application/json; charset=utf-8',
  },
});

export default api;
