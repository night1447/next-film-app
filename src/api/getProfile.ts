import { AxiosPromise } from 'axios';
import { axiosInstance } from '@/api/instance';
import Endpoints from '@/api/endpoints';

export const getProfile = (): AxiosPromise<string> => axiosInstance.get(Endpoints.AUTH.PROFILE);
