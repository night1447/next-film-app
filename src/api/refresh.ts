import { AxiosPromise } from 'axios';
import { ILoginResponse } from '@/http/LoginRequest';
import { axiosInstance } from '@/api/instance';
import Endpoints from '@/api/endpoints';

export const refreshToken = (): AxiosPromise<ILoginResponse> => axiosInstance.get(Endpoints.AUTH.REFRESH);
