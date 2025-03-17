import axios from 'axios';

export const authFetch = axios.create({
  baseURL: 'https://www.course-api.com',
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers['Accept'] = 'application/json; charset=utf-8';
    console.log('request sent');
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
  (error) => {
    console.log(error?.response);
    if (error?.response?.status === 404) {
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }
);
