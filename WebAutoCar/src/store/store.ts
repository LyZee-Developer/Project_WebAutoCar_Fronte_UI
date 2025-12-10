import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import Theme from '../store/system/ThemeStore'
export const store = configureStore({
  reducer: {
    counter1: counterReducer,
    theme: Theme,
  },
});

// Types for Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
