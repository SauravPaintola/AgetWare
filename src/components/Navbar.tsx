"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full h-16 shadow-md absolute top-0 left-0 px-10">
      <Link href="/">
        <p className="text-2xl font-bold text-gray-800">Valentin Paul</p>
      </Link>
      <button
        className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-800 border-gray-300 hover:text-gray-900"
        onClick={toggleMenu}
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V15z" />
        </svg>
      </button>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:w-auto lg:space-x-6`}
      >
        <li>
          <Link href="/">
            <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900">
              Shop
            </p>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900">
              Cart
            </p>
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
