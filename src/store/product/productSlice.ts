import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "src/hooks";

type ProductData = {
  id: string;
  name: string;
  market: string;
  img: string;
  description: string;
};

type ProductState = {
  product: ProductData | null;
};

const initialState: ProductState = {
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductData>) => {
      state.product = action.payload;
    },
    clearProductState: () => {
      return initialState;
    },
  },
});

export const useProductState = (key: keyof ProductData) => {
  const market = useAppSelector((state) => state.market[key]);
  return market;
};
export const { setProduct, clearProductState } = productSlice.actions;
export type { ProductData };
export default productSlice.reducer;
