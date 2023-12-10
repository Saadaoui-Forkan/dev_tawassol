import { configureStore } from '@reduxjs/toolkit'
import { alertReducer } from './slices/alertSlice';

const store = configureStore({
    reducer: {
        alert: alertReducer,
    }
});

export default store