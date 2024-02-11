import { LoginProvider } from "context/InputContext/InputContext";
import Login from "pages/Login/Login";
import Menu from "pages/Menu/Menu";
import Cart from "pages/Cart/Cart";
import Order from "pages/Order/Order";
import { Route, Routes } from "react-router-dom";
import "./styles/globals.css";

const App = () => {
  return (
    <>
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order/new" element={<Order />}></Route>
        </Routes>
      </LoginProvider>
    </>
  );
};

export default App;
