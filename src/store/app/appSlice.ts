import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "src/hooks";

type AppState = {
  currentPage: string | null;
  addonTitle: string | null;
  backUrl: string | null;
};
const initialState: AppState = {
  currentPage: null,
  addonTitle: null,
  backUrl: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }: PayloadAction<string>) => {
      state.backUrl = state.currentPage;
      state.currentPage = payload;
    },
    setAddonTitle: (
      state,
      { payload }: PayloadAction<(typeof initialState)["addonTitle"]>
    ) => {
      state.addonTitle = payload;
    },
    clearBackUrl: (
      state,
      { payload }: PayloadAction<(typeof initialState)["backUrl"]>
    ) => {
      state.backUrl = payload;
    },
  },
});

export const useAppState = (key: keyof AppState) => {
  const app = useAppSelector((state) => state.app[key]);
  return app;
};
export const { setCurrentPage, setAddonTitle, clearBackUrl } = appSlice.actions;
export default appSlice.reducer;
