"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

type AuthContextType = {
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => localStorage.getItem("__token") !== null
  );

  const handleLogin = () => {
    localStorage.setItem("__token", "test.evyiwjXHNwwnndndd.dgyuuwuwdndid");
    setIsLoggedIn(true);
    toast.success("Login successful!", {
      autoClose: 1000,
      hideProgressBar: true,
    });
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    toast.success("You are now logged out!", {
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext<AuthContextType>(AuthContext);

export default AuthProvider;
