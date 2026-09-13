import React from "react";
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white py-10 text-sm font-sans text-slate-600 md:py-12">
      <div className="w-full px-5 sm:px-6 lg:px-12">

        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mb-12 md:grid-cols-5">

          <div className="space-y-4 sm:col-span-2 md:col-span-2">
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="h-8 w-auto object-contain"
            />

            <p className="max-w-sm pt-1 text-xs leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-slate-700">
              <span className="cursor-pointer hover:text-pink-500">
                GitHub
              </span>

              <span className="cursor-pointer hover:text-pink-500">
                Twitter
              </span>

              <span className="cursor-pointer hover:text-pink-500">
                LinkedIn
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900">
              PRODUCT
            </h3>

            <ul className="space-y-2 text-xs text-slate-500">
              <li className="cursor-pointer hover:text-slate-900">
                Home
              </li>
              <li className="cursor-pointer hover:text-slate-900">
                Technology
              </li>
              <li className="cursor-pointer hover:text-slate-900">
                Project
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900">
              COMPANY
            </h3>

            <ul className="space-y-2 text-xs text-slate-500">
              <li className="cursor-pointer hover:text-slate-900">
                About
              </li>
              <li className="cursor-pointer hover:text-slate-900">
                Contact
              </li>
              <li className="cursor-pointer hover:text-slate-900">
                Careers
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900">
              LEGAL
            </h3>

            <ul className="space-y-2 text-xs text-slate-500">
              <li className="cursor-pointer hover:text-slate-900">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:text-slate-900">
                Terms of Service
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-center text-xs text-slate-400 sm:flex-row sm:text-left">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-slate-600">
              Privacy
            </span>

            <span className="cursor-pointer hover:text-slate-600">
              Terms
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;