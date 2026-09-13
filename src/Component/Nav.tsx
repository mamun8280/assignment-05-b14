import React, { useState } from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex w-full items-center px-4 py-3 md:px-6 lg:px-12">

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mr-3 text-2xl text-gray-700 md:hidden"
        >
          ☰
        </button>

        {/* Logo */}
        <div>
          <img
            className="h-9 w-auto md:h-10"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="ml-auto hidden items-center gap-8 font-medium text-gray-700 md:flex">
          <li className="cursor-pointer transition hover:text-pink-400">
            Home
          </li>

          <li className="cursor-pointer transition hover:text-pink-400">
            Technologies
          </li>

          <li className="cursor-pointer transition hover:text-pink-400">
            Projects
          </li>

          <li className="cursor-pointer transition hover:text-pink-400">
            About
          </li>

          <li className="cursor-pointer transition hover:text-pink-400">
            Contact
          </li>
        </ul>

        {/* Buttons */}
        <div className="ml-auto flex items-center md:ml-8">
          <button className="cursor-pointer px-3 py-2 text-sm font-medium text-black transition hover:text-pink-400 md:px-7 md:py-4 md:text-[15px]">
            Sign in
          </button>

          <button className="cursor-pointer rounded-full bg-[#c92b69] px-3 py-2 text-sm text-white transition hover:bg-pink-600 md:px-7 md:py-4 md:text-[15px]">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4 font-medium text-gray-700">
            <li className="cursor-pointer hover:text-pink-400">
              Home
            </li>

            <li className="cursor-pointer hover:text-pink-400">
              Technologies
            </li>

            <li className="cursor-pointer hover:text-pink-400">
              Projects
            </li>

            <li className="cursor-pointer hover:text-pink-400">
              About
            </li>

            <li className="cursor-pointer hover:text-pink-400">
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;