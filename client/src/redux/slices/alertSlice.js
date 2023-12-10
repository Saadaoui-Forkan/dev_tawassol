import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alerts: [],
  },
  reducers: {
    setAlerts(state, action) {
        state.alerts = [...state.alerts, action.payload]
    },
    removeAlert(state, action) {
        state.alerts = state.alerts.filter(alert => alert.id === action.payload?.id)
    }
  },
});

const alertReducer = alertSlice.reducer;
const alertActions = alertSlice.actions;

export {alertActions, alertReducer}