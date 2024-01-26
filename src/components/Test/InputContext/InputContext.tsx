import React, { createContext, useContext, useState, ReactNode } from "react";

interface LoginContextProps {
  children: ReactNode;
}

interface LoginContextValue {
  username: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const LoginContext = createContext<LoginContextValue | undefined>(undefined);

export const LoginProvider: React.FC<LoginContextProps> = ({ children }) => {
  const [username, setUserName] = useState<string>("");

  return (
    <LoginContext.Provider value={{ username, setUserName }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("Context must be used within it's provider");
  }

  return context;
};
