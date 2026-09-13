import React from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4 lg:px-12">
        
        <div>
          <img
            className="h-10 w-auto"
            src={logo}
            alt="Logo"
          />
        </div>

        <ul className="hidden items-center gap-8 font-medium text-gray-700 md:flex">
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

        <div className="flex items-center">
          <button className="cursor-pointer  bg-white px-7 py-4 text-[10px] font-medium text-black text-[15px] transition hover:text-pink-400">
            Sign in
          </button>

          <button className="cursor-pointer rounded-full bg-[#c92b69] px-7 py-4 text-[15px]  text-white transition hover:bg-pink-600">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;