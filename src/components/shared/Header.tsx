"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoBagOutline } from "react-icons/io5";
import { useAuth } from "@/context/AuthProvider";

const Header: React.FC = () => {
  const { isLoggedIn, handleLogin, handleLogout, cartItemsCount } = useAuth();

  return (
    <header className="bg-transparent fixed z-10 left-0 right-0 top-0 items-center h-16 px-5">
      <div className="flex justify-between items-center gap-5 h-full w-full max-w-screen-2xl mx-auto md:rounded-full backdrop-blur-md sm:px-5 py-4">
        <h1 className="w-36 sm:w-auto">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="SeamlessPOS"
              width={150}
              height={387}
              decoding="async"
              fetchPriority="high"
              className="w-full relative"
            />
          </Link>
        </h1>

        <div className="flex items-center gap-4">
          <button className="hover:text-gray-500 relative text-primary-dark transition duration-300">
            <IoBagOutline className="text-xl sm:text-2xl" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-200 text-textBlack text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>

          {!isLoggedIn ? (
            <button
              onClick={handleLogin}
              className="bg-primary text-xs text-textGray-100 px-3 py-1 sm:px-5 sm:py-2 rounded hover:bg-primary-dark transition duration-300"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-textGray-100 px-3 py-1 sm:px-5 sm:py-2 rounded hover:bg-red-400 transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
