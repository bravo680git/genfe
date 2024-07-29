import axios from 'axios';
import { path } from '@/router/path';

const axiosClient = axios.create({
  baseURL: import.meta.env.API_BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
  const token = useAuthStore().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 401) {
      useAuthStore().logout();
      window.location.href = path.login;
    }
    return Promise.reject(error);
  },
);

export { axiosClient };
