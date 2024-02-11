import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PIZZA_API } from "../../constants";

export interface MenuItem {
  id: number;
  imageUrl: string;
  name: string;
  soldOut: boolean;
  unitPrice: number;
  ingredients: string[];
}

export interface MenuState {
  items: MenuItem[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: MenuState = {
  items: [],
  isLoading: false,
  isError: false,
};

export const getMenuItems = createAsyncThunk("menu/getMenuItems", async () => {
  const res = await fetch(`${PIZZA_API}/menu`);
  const { data } = await res.json();

  return data;
});

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenuItems.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(getMenuItems.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    });
    builder.addCase(getMenuItems.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default menuSlice.reducer;
