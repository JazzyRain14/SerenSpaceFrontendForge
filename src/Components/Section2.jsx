import React from "react";
import "../CustomStyles.css";

const Section2 = () => {
  return (
    <div className="overflow-hidden flex flex-col min-h-[450px] max-lg:px-[38px] lg:px-[58px] bg-white">
      <h1 className="text-5xl text-center font-LibreBold my-14 text-black">Who we serve</h1>
      <div className="flex-1 relative flex items-center">
        {/* Left Arrow */}
        <button className="absolute -left-8  z-50 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {/* Cards */}
        <div className="w-full flex overflow-x-auto scroll-smooth p-2 space-x-4">
          {/* individual card */}
          <div className="border-2 md:w-[400px] h-[250px] max-md:w-full border-primary flex-shrink-0 custom-card-radius text-left flex flex-col items-center p-5">
            <h2 className="font-LibreBold  text-center text-4xl mb-2 text-brown-black">
              Individual
            </h2>
            <div className="flex-1 flex flex-col justify-center">
              <p className="font-RedHat  font-semibold text-center text-brown-black mb-4">
                If it will be just you in the sessions
              </p>
            </div>
            <button className="bg-transparent text-brown-black border-2 border-primary px-4  py-3 custom-button-radius font-semibold  w-32 self-start">
              Get Started
            </button>
          </div>
          {/* Couple Card */}
          <div className="border-2 md:w-[400px] h-[250px] max-md:w-full border-primary flex-shrink-0 custom-card-radius text-left  flex flex-col items-center p-5">
            <h2 className="font-LibreBold text-4xl text-center mb-2 text-brown-black">
              Couple
            </h2>
            <div className="flex-1 flex flex-col justify-center">
              <p className="font-RedHat font-semibold text-center text-brown-black mb-4">
                If you will be with your partner in the sessions
              </p>
            </div>
            <button className="bg-transparent text-brown-black font-semibold border-2 border-primary px-4 py-3 custom-button-radius w-32 self-start">
              Get Started
            </button>
          </div>
          {/* Friends Card */}
          <div className="border-2 md:w-[400px] h-[250px] max-md:w-full border-primary flex-shrink-0 custom-card-radius text-left  flex flex-col items-center p-5">
            <h2 className="font-LibreBold text-4xl text-center mb-2 text-brown-black">
              Friends
            </h2>
            <div className="flex-1 flex flex-col justify-center">
              <p className="font-RedHat text-center font-semibold text-brown-black mb-4">
                If you will be with your friend in the sessions
              </p>
            </div>
            <button className="bg-transparent text-brown-black font-semibold border-2 border-primary px-4 py-3 custom-button-radius w-32 self-start">
              Get Started
            </button>
          </div>
        </div>
        {/* Right Arrow */}
        <button className="absolute -right-8 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div >
  );
};

export default Section2;
