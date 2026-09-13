import React from "react";
import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full bg-[#f7f7f8]">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-16 md:px-10 lg:px-16 xl:px-20">

        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight text-[#253247] md:text-5xl lg:text-6xl">
            Build Your Ideal
          </h1>

          <h1 className="bg-linear-to-r from-[#ff5428] via-[#e33565] to-[#743cc4] bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl">
            Development Stack
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-[#657080] md:text-base">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button className="cursor-pointer rounded-md bg-linear-to-r from-[#ff6b21] to-[#df3975] px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="cursor-pointer rounded-md border border-[#d5d9df] bg-transparent px-7 py-3 text-xs font-medium text-[#657080] transition hover:bg-white hover:text-pink-400">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            src={bannerImage}
            alt="Development Stack"
            className="w-80 lg:w-105 xl:w-120"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;