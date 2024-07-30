import { axiosClient } from './axiosClient';
import type { LoginPayload, LoginResponse } from './type/auth';

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post<never, BaseResponse<LoginResponse>>('/login', payload);
  },
};

export type { LoginPayload, LoginResponse };
