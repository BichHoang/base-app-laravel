import axios from 'axios';
import { API_URL } from '../config/constants';
import router from '../router';
import { getToken, removeToken, setToken } from './auth';

// Create axios instance
const service = axios.create({
  baseURL: API_URL,
  timeout: 60000, // Request timeout
});

// request
service.interceptors.request.use(
  config => {
    const token = getToken() || false;
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response pre-processing
service.interceptors.response.use(
  response => {
    if (response.headers.authorization) {
      setToken(response.headers.authorization);
      response.data.token = response.headers.authorization;
    }
    return response;
  },
  error => {
    const res = error.response;
    if (res) {
      if (res.status === 404) {
        router.replace({ path: '/404' });
      }
      if (process.env.NODE_ENV === 'production' && res.status === 500) {
        router.replace({ path: '/500' });
      }
      if (res.status === 401) {
        router.replace({ path: '/401' });
      }

      return Promise.reject(error);
    }
  }
);

export default service;
