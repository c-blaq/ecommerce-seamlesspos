"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

type AuthContextType = {
  cartItemsCount: number;
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
  handleAddToCart: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [cartItemsCount, setCartItemsCount] = useState<number>(0); //added cart to this file to avoid creating a new context provider for it

  const handleLogin = () => {
    setIsLoggedIn(true);
    toast.success("Login successful!", {
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success("You are now logged out!", {
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  // Please note, in a proper implementaion, this should take an Id. This approach is used for tesing purpose
  const handleAddToCart = () => {
    setCartItemsCount((prev) => prev + 1);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        handleLogin,
        handleLogout,
        cartItemsCount,
        handleAddToCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext<AuthContextType>(AuthContext);

export default AuthProvider;
