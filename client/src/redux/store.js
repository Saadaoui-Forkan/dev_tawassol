import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import { alertReducer } from './slices/alertSlice';
import { profileReducer } from './slices/profileSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        alert: alertReducer,
        profile: profileReducer,
    }
});

export default store;