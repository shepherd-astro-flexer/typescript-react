import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./starter/09-rtk/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// since we are using typescript, we need to setup two more types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
