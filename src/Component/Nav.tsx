import React from 'react';
import logo from '../assets/logo-text.png'

const nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

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

        <div className="flex items-center ">
        <button className=" cursor-pointer rounded-full rounded-r-none border-r-0 bg-[#ffffff] px-5 py-2 text-[10px] font-medium text-black">
        Sign Up
      </button>

      <button className="cursor-pointer transition hover:bg-pink-600 rounded-full rounded-l-none bg-[#c92b69] px-5  py-2 text-[10px] font-medium text-white ">
        Sign Up
      </button>
    </div>

      </div>
    </nav>

    );
};

export default nav;