import axios from 'axios';
import { path } from '@/router';
import { useAuthStore } from '@/stores';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 401) {
      useAuthStore.persist.clearStorage();
      window.location.href = path.login;
    }
    return Promise.reject(error);
  },
);

export { axiosClient };
