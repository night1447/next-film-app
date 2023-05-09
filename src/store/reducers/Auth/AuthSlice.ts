import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    authData: {
        accessToken: string | null
        isLoading: boolean
        error: string | null
    };
    profileData: {
        profile: string | null
        isLoading: boolean
        error: string | null
    };
}

const initialState: AuthState = {
    profileData: {
        profile: null,
        isLoading: false,
        error: null,
    },
    authData: {
        accessToken: null,
        isLoading: false,
        error: null,
    },
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        startLogin(state: AuthState) {
            state.authData.isLoading = true;
        },
        successLogin(state, action: PayloadAction<string>) {
            state.authData.accessToken = action.payload;
            state.authData.isLoading = false;
            state.authData.error = null;
        },
        failLogin(state, action: PayloadAction<string>) {
            state.authData.accessToken = null;
            state.authData.isLoading = false;
            state.authData.error = action.payload;
        },
        startLoadProfile(state) {
            state.profileData.isLoading = true;
            state.profileData.error = null;
        },
        loadProfileSuccess(state, action: PayloadAction<string>) {
            state.profileData.profile = action.payload;
            state.profileData.isLoading = false;
            state.profileData.isLoading = false;
        },
        failLoadProfile(state, action: PayloadAction<string>) {
            state.profileData.profile = null;
            state.profileData.isLoading = false;
            state.profileData.error = action.payload;
        },
        logout(state) {
            state = initialState;
        },
    },
});

export const {
    logout,
    loadProfileSuccess,
    failLoadProfile,
    startLoadProfile,
    successLogin,
    failLogin,
    startLogin,
} = AuthSlice.actions;