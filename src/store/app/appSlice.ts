import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AppState = {
  currentPage: string | null;
};
const initialState: AppState = {
  currentPage: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = appSlice.actions;
export default appSlice.reducer;
