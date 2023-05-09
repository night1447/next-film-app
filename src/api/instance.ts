import axios, { AxiosError } from 'axios';

import Endpoints from './endpoints';
import store from '@/store';
import { logout } from '@/store/reducers/auth/AuthSlice';
import { getAccessToken } from '@/store/reducers/auth/actions';

export const axiosInstance = axios.create({});

const urlsSkipAuth = [Endpoints.AUTH.LOGIN, Endpoints.AUTH.REFRESH, Endpoints.AUTH.LOGOUT];

axiosInstance.interceptors.request.use(async (config) => {
    if (config.url && urlsSkipAuth.includes(config.url)) {
        return config;
    }

    const accessToken = await store.dispatch(getAccessToken());

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        const isLoggedIn = !!store.getState().auth.authData.accessToken;

        if ((error.response?.status === 401) && isLoggedIn && error.request.url !== Endpoints.AUTH.LOGOUT) {
            store.dispatch(logout());
        }

        throw error;
    },
);