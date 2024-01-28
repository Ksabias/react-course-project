import React from "react";
import { useLogin } from "../../context/InputContext/InputContext";
import "./LoginPage.scss";
import Default from "layouts/Default/Default";
import { useDispatch } from "react-redux";
import { setAuthStatus } from "../../redux/slices/auth";

const LoginPage: React.FC = () => {
  const { username, setUserName } = useLogin();
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log("Username:", username);
    localStorage.setItem("username", username);
    dispatch(setAuthStatus(true));
  };

  return (
    <Default>
      <h2>The best pizza</h2>

      <h3>Straight out of the oven, straight to you.</h3>

      <form>
        <label>
          Welcome! Please start by telling us your name:
          <input
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </Default>
  );
};

export default LoginPage;
