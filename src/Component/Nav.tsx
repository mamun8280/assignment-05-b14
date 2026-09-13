import { useState } from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="relative mx-auto flex w-full items-center px-4 py-3 md:px-6 lg:px-12">

        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-gray-700 md:hidden"
        >
          ☰
        </button>

        
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img
            className="h-9 w-auto md:h-10"
            src={logo}
            alt="Logo"
          />
        </div>

        
        <ul className="ml-auto hidden items-center gap-8 font-medium text-gray-700 md:flex">
          <li className="cursor-pointer hover:text-pink-400">Home</li>
          <li className="cursor-pointer hover:text-pink-400">Technologies </li>
          <li className="cursor-pointer hover:text-pink-400">Projects</li>
          <li className="cursor-pointer hover:text-pink-400">About</li>
          <li className="cursor-pointer hover:text-pink-400">Contact</li>
        </ul>

       
        <div className="ml-auto flex items-center md:ml-8">
          <button className="cursor-pointer px-2 py-2 text-xs font-medium text-black hover:text-pink-400 sm:px-3 md:px-7 md:py-4 md:text-[15px]">
            Sign In
          </button>

          <button className="cursor-pointer rounded-full bg-[#c92b69] px-2.5 py-2 text-xs text-white hover:bg-pink-600 sm:px-3 md:px-7 md:py-4 md:text-[15px]">
            Sign Up
          </button>
        </div>
      </div>

     
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4 font-medium text-gray-700">
            <li className="cursor-pointer hover:text-pink-400">Home</li>
            <li className="cursor-pointer hover:text-pink-400">
              Technologies
            </li>
            <li className="cursor-pointer hover:text-pink-400">
              Projects
            </li>
            <li className="cursor-pointer hover:text-pink-400">About</li>
            <li className="cursor-pointer hover:text-pink-400">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;