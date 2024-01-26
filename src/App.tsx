import { LoginProvider } from "components/Test/InputContext/InputContext";
import LoginPage from "components/Test/LoginPage/LoginPage";
import Test from "components/Test/Test";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <LoginProvider>
        <div>
          <LoginPage />
        </div>
      </LoginProvider>

      <Routes>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </>
  );
};

export default App;
