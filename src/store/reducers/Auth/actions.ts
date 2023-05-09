import { Dispatch } from '@reduxjs/toolkit';
import { AxiosPromise } from 'axios';
import { isTokenExpired } from '@/utils/jwt';
import store from '@/store';
import api from '@/api';
import {
    failLoadProfile,
    failLogin,
    loadProfileSuccess,
    logout,
    startLoadProfile,
    startLogin,
    successLogin,
} from '@/store/reducers/auth/AuthSlice';
import { ILoginRequest, ILoginResponse } from '@/http/LoginRequest';

export const loginUser =
    (data: ILoginRequest) =>
        async (dispatch: Dispatch<any>): Promise<void> => {
            try {
                dispatch(startLogin());
                const res = await api.auth.login(data);

                dispatch(successLogin(res.data.accessToken));
                dispatch(getProfile());

            } catch (e: any) {
                console.error(e);
                dispatch(failLogin(e.message));
            }
        };

export const logoutUser =
    () =>
        async (dispatch: Dispatch): Promise<void> => {
            try {
                await api.auth.logout();

                dispatch(logout());

            } catch (e) {
                console.error(e);
            }
        };

export const getProfile = () =>
    async (dispatch: Dispatch<any>): Promise<void> => {
        try {
            dispatch(startLoadProfile());

            const res = await api.auth.getProfile();

            dispatch(loadProfileSuccess(res.data));
        } catch (e: any) {
            console.error(e);

            dispatch(failLoadProfile(e.message));
        }
    };

// переменная для хранения запроса токена (для избежания race condition)
let refreshTokenRequest: AxiosPromise<ILoginResponse> | null = null;

export const getAccessToken =
    () =>
        async (dispatch: Dispatch<any>): Promise<string | null> => {
            try {
                const accessToken = store.getState().auth.authData.accessToken;

                if (!accessToken || isTokenExpired(accessToken)) {
                    if (refreshTokenRequest === null) {
                        refreshTokenRequest = api.auth.refreshToken();
                    }

                    const res = await refreshTokenRequest;
                    refreshTokenRequest = null;

                    dispatch(successLogin(res?.data.accessToken));

                    return res?.data.accessToken;
                }

                return accessToken;
            } catch (e) {
                console.error(e);

                return null;
            }
        };