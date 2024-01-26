import React from "react";
import { useLogin } from "../InputContext/InputContext";
import "./LoginPage.scss";

const LoginPage: React.FC = () => {
  const { username, setUserName } = useLogin();

  const handleLogin = () => {
    console.log("Username:", username);
  };

  return (
    <div>
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
    </div>
  );
};

export default LoginPage;
