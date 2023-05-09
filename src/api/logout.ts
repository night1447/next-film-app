import { AxiosPromise } from 'axios';
import { axiosInstance } from '@/api/instance';
import Endpoints from '@/api/endpoints';

export const logout = (): AxiosPromise => axiosInstance.get(Endpoints.AUTH.LOGOUT);
