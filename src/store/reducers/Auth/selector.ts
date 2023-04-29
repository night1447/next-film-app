import { typeRootReducer } from '@/store/reducers';

export const selectCurrentUser = (state: typeRootReducer) => state.auth.user;
export const selectIsAuth = (state: typeRootReducer) => state.auth.isAuth;
