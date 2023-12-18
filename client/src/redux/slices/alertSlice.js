import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alerts: [],
  },
  reducers: {
    setAlerts(state, action) {
      state.alerts?.push(action.payload);
    },
    removeAlert(state, action) {
      const alertId = action.payload;
      return state.alerts?.filter((alert) => alert.id !== alertId.id);
    }
  },
});

const alertReducer = alertSlice.reducer;
const alertActions = alertSlice.actions;

export {alertActions, alertReducer}