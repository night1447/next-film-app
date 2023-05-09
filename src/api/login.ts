import { Endpoints } from '@/http/endpoints';
import { ILoginRequest, ILoginResponse } from '@/http/LoginRequest';
import { AxiosPromise } from 'axios';
import { axiosInstance } from '@/api/instance';

const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> => axiosInstance.post(Endpoints.AUTH.LOGIN, params);
export default login;