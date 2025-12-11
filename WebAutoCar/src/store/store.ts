import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import System from './system/SystemStore'
export const store = configureStore({
  reducer: {
    counter1: counterReducer,
    system: System,
  },
});

// Types for Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
