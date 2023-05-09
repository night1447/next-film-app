import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/store/reducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


const store = configureStore({
    reducer: rootReducer,
});
export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootReducerType = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootReducerType> = useSelector;
