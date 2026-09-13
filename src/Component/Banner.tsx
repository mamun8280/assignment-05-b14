import React from "react";
import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full bg-[#f7f7f8]">
      <div className="mx-auto flex w-full items-center justify-between px-5 py-12 sm:px-6 md:px-10 md:py-16 lg:px-16 xl:px-20">

        {/* Left Content */}
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight text-[#253247] sm:text-4xl md:text-5xl lg:text-6xl">
            Build Your Ideal
          </h1>

          <h1 className="bg-linear-to-r from-[#ff5428] via-[#e33565] to-[#743cc4] bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            Development Stack
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[#657080] sm:mt-5 md:text-base">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
            <button className="cursor-pointer rounded-md bg-linear-to-r from-[#ff6b21] to-[#df3975] px-4 py-3 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 sm:px-5">
              Explore Technologies
            </button>

            <button className="cursor-pointer rounded-md border border-[#d5d9df] bg-transparent px-6 py-3 text-xs font-medium text-[#657080] transition hover:bg-white hover:text-pink-400 sm:px-7">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            src={bannerImage}
            alt="Development Stack"
            className="w-64 lg:w-105 xl:w-120"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;