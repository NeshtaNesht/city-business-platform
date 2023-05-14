import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app/appSlice";
import marketReducer from "./market/marketSlice";
import productReducer from "./product/productSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    market: marketReducer,
    product: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export * from "./app/appSlice";
export type { MarketsData } from "./market/marketSlice";
export type { ProductData } from "./product/productSlice";
