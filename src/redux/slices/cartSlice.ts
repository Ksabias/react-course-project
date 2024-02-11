import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  imageUrl: string;
  name: string;
  soldOut: boolean;
  unitPrice: number;
  ingredients: string[];
  qty: number;
}

export interface CartState {
  items: CartItem[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: CartState = {
  items:
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") as string) ?? []
      : [],
  isLoading: false,
  isError: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.qty = item.qty + 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    deleteFromCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    decrementQty: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item && item.qty > 0) {
        item.qty = item.qty - 1;
        if (item.qty === 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    incrementQty: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.qty = item.qty + 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    cleanCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  decrementQty,
  incrementQty,
  cleanCart,
} = cartSlice.actions;
export default cartSlice.reducer;
