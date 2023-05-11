import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app/appSlice";
import marketReducer from "./market/marketSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    market: marketReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export * from "./app/appSlice";
export type { MarketsData } from "./market/marketSlice";
