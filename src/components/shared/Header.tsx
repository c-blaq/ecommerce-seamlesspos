import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoBagOutline } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <header className="bg-transparent fixed z-10 left-0 right-0 top-5 items-center h-16 px-5">
      <div className="flex justify-between items-center gap-5 h-full w-full max-w-screen-2xl mx-auto sm:rounded-full backdrop-blur-md sm:px-5 py-4">
        <h1 className="text-lg sm:text-xl font-semibold transition duration-300">
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
          <button className="hover:text-gray-500 text-primary-dark transition duration-300">
            <IoBagOutline className="text-xl sm:text-2xl" />
          </button>
          <Link
            href="/"
            className="bg-primary text-textGray-100 px-3 py-1 sm:px-5 sm:py-2 rounded hover:bg-primary-dark transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
