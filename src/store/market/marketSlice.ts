import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "src/hooks";

type MarketsData = {
  id: string;
  shortName: string;
  address: string;
  img: string;
  category: string;
  description: string;
};

type MarketState = {
  market: MarketsData | null;
};

const initialState: MarketState = {
  market: null,
};

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    setMarket: (state, action: PayloadAction<MarketsData>) => {
      state.market = action.payload;
    },
    clearMarketState: () => {
      return initialState;
    },
  },
});

export const useMarketState = (key: keyof MarketState) => {
  const market = useAppSelector((state) => state.market[key]);
  return market;
};
export const { setMarket, clearMarketState } = marketSlice.actions;
export type { MarketsData };
export default marketSlice.reducer;
