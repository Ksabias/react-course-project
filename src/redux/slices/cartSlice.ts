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
  total: number;
  isLoading: boolean;
  isError: boolean;
}

const cart: CartItem[] =
  typeof localStorage !== "undefined"
    ? JSON.parse(localStorage.getItem("cart") as string) ?? []
    : [];

const countTotal = (items: CartItem[]) =>
  items.reduce((prev, curr) => {
    return prev + curr.unitPrice * curr.qty;
  }, 0);

const initialState: CartState = {
  items:
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") as string) ?? []
      : [],
  total: countTotal(cart),
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

      state.total = countTotal(state.items);

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    deleteFromCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);

      state.total = countTotal(state.items);

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

      state.total = countTotal(state.items);

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    incrementQty: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.qty = item.qty + 1;
      }

      state.total = countTotal(state.items);

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    cleanCart: (state) => {
      state.items = [];
      state.total = countTotal(state.items);
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
