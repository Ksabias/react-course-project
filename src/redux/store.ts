import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { cartSlice } from "./slices/cartSlice";
import { menuSlice } from "./slices/menuSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    menu: menuSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
