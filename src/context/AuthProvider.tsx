"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type AuthContextType = {
  //   token: string | undefined;
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  //   const [token, setToken] = useState<string | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => localStorage.getItem("__token") !== null
  );

  const handleLogin = () => {
    localStorage.setItem("__token", "test.evyiwjXHNwwnndndd.dgyuuwuwdndid");
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext<AuthContextType>(AuthContext);

export default AuthProvider;
