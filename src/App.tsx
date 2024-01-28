import { LoginProvider } from "context/InputContext/InputContext";
import LoginPage from "pages/LoginPage/LoginPage";
import MenuPage from "pages/MenuPage/MenuPage";
import { Route, Routes } from "react-router-dom";
import "./styles/globals.css";

const App = () => {
  return (
    <>
      <LoginProvider>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
        </Routes>
      </LoginProvider>
    </>
  );
};

export default App;
