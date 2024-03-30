import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: "alert",
    initialState: {
        alerts: []
    },
    reducers: {
        createAlert: (state, action) => {
            state.alerts.push({
                message: action.payload,
                id: Date.now()
            })
        },
        clearAlert: (state, action) => {
            state.alerts = state.alerts.filter(alert => alert.id !== action.payload);
          }
    },
});

const alertReducer = alertSlice.reducer;
const alertActions = alertSlice.actions;

export { alertReducer, alertActions }

