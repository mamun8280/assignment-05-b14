import React from 'react';
import bannerImage from '../assets/banner-stack.png'

const banner = () => {
    return (
        <div className="bg-[#f7f7f8]">
      <div className="mx-auto flex max-w-360 items-center justify-between px-4 py-12 md:px-8 lg:px-14">

        
        <div className="max-w-137.5">
          <h1 className="text-4xl font-bold leading-tight text-[#253247] md:text-5xl">
            Build Your Ideal
          </h1>

          <h1 className="bg-linear-to-r from-[#ff5428] via-[#e33565] to-[#743cc4] bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl">
            Development Stack
          </h1>

          <p className="mt-5 max-w-125 text-sm leading-6 text-[#657080] md:text-base">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

         
          <div className="mt-8 flex items-center gap-3">
            <button className="rounded-md bg-linear-to-r from-[#ff6b21] to-[#df3975] px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="rounded-md border border-[#d5d9df] bg-transparent px-7 py-3 text-xs font-medium text-[#657080] transition hover:bg-white">
              Learn More
            </button>
          </div>
        </div>

        
        <div className="hidden md:block">
          <img
            src={bannerImage}
            alt="Development Stack"
            className="w-75 lg:w-95"
          />
        </div>

      </div>
    </div>
    );
};

export default banner;