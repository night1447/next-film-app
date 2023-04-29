import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/models/User';

interface IRegistration {
    user: IUser;
    isAuth: boolean;
    accessToken: string;
    refreshToken: string;
}

let initialState: IRegistration = {
    isAuth: false,
    user: {} as IUser,
    accessToken: '',
    refreshToken: '',
};
const RegistrationSlice = createSlice({
    name: 'registration',
    initialState: initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
        },
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        setRefreshToken(state, action: PayloadAction<string>) {
            state.refreshToken = action.payload;
            localStorage.setItem('token',`${action.payload}`);
        },
        setAccessToken(state, action: PayloadAction<string>) {
            state.accessToken = action.payload;
        },
    },
});