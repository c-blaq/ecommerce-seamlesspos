import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoBagOutline } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <header className="bg-white items-center h-16 lg:h-20">
      <div className="flex justify-between items-center gap-5 h-full w-full max-w-screen-2xl mx-auto py-4 px-5">
        <h1 className="text-lg sm:text-xl font-semibold transition duration-300">
          <Link href="/">
            <Image
              src="/logo.png"
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
          <button className="hover:text-gray-500 transition duration-300">
            <IoBagOutline className="text-xl sm:text-2xl" />
          </button>
          <Link
            href="/"
            className="bg-primary text-textGray-100 px-3 py-1 sm-px-5 sm:py-2 rounded hover:bg-primary-dark transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
