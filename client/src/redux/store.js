import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import { alertReducer } from './slices/alertSlice';
import { profileReducer } from './slices/profileSlice';
import { postReducer } from './slices/postSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        alert: alertReducer,
        profile: profileReducer,
        post: postReducer,
    }
});

export default store;