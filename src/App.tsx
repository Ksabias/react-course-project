import { LoginProvider } from "context/InputContext/InputContext";
import { Route, Routes } from "react-router-dom";
import "./styles/globals.css";
import { Suspense, lazy } from "react";

const LoginLazy = lazy(() => import("pages/Login/Login"));
const MenuLazy = lazy(() => import("pages/Menu/Menu"));
const CartLazy = lazy(() => import("pages/Cart/Cart"));
const OrderLazy = lazy(() => import("pages/Order/Order"));
const OrderDetailsLazy = lazy(() => import("pages/OrderDetails/OrderDetails"));

const App = () => {
  return (
    <>
      <LoginProvider>
        <Suspense fallback={<h1>Loading</h1>}>
          <Routes>
            <Route path="/" element={<LoginLazy />}></Route>
            <Route path="/menu" element={<MenuLazy />}></Route>
            <Route path="/cart" element={<CartLazy />}></Route>
            <Route path="/order/new" element={<OrderLazy />}></Route>
            <Route path="/order/:id" element={<OrderDetailsLazy />}></Route>
          </Routes>
        </Suspense>
      </LoginProvider>
    </>
  );
};

export default App;
