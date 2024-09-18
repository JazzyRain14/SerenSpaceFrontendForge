import React from "react";
import "../CustomStyles.css";

const Section2 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-5xl font-LibreBold mb-20 text-black">Who we serve</h1>
      <div className="flex justify-between items-center space-x-4">
        {/* Left Arrow */}
        <button className="bg-primary text-white w-10 h-10 custom-button-radius flex items-center justify-center">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Individual Card */}
          <div className="border-2 border-primary p-6 custom-card-radius text-left h-60 flex flex-col">
            <h2 className="font-LibreBold text-xl mb-2 text-brown-black">
              Individual
            </h2>
            <div className="flex-1 flex flex-col justify-center">
              <p className="font-RedHat text-brown-black mb-4">
                If it will be just you in the sessions
              </p>
            </div>
            <button className="bg-transparent text-primary border-2 border-primary px-4 py-2 custom-button-radius w-32 self-start">
              Get Started
            </button>
          </div>

          {/* Couple Card */}
          <div className="border-2 border-primary p-6 custom-card-radius text-left h-60 flex flex-col">
            <h2 className="font-LibreBold text-xl mb-2 text-brown-black">
              Couple
            </h2>
            <div className="flex-1 flex flex-col justify-center">
              <p className="font-RedHat text-brown-black mb-4">
                If you will be with your partner in the sessions
              </p>
            </div>
            <button className="bg-transparent text-primary border-2 border-primary px-4 py-2 custom-button-radius w-32 self-start">
              Get Started
            </button>
          </div>

          {/* Friends Card */}
          <div className="border-2 border-primary p-6 custom-card-radius text-left h-60 flex flex-col">
            <h2 className="font-LibreBold text-xl mb-2 text-brown-black">
              Friends
            </h2>
            <div className="flex-1 flex flex-col justify-center">
              <p className="font-RedHat text-brown-black mb-4">
                If you will be with your friend in the sessions
              </p>
            </div>
            <button className="bg-transparent text-primary border-2 border-primary px-4 py-2 custom-button-radius w-32 self-start">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="bg-primary text-white w-10 h-10 custom-button-radius flex items-center justify-center">
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
    </div>
  );
};

export default Section2;
