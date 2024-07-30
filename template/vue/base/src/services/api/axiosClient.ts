import axios from 'axios';
import { STORAGE_KEY } from '@/stores/auth';
import { path } from '@/router/path';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEY.token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(STORAGE_KEY.token);
      window.location.href = path.login;
    }
    return Promise.reject(error);
  },
);

export { axiosClient };
