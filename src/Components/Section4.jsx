import React from "react";
import "../CustomStyles.css";
import Therapistphotoshoot1 from "../assets/Images/Therapist Photoshoot Idea 1.png";
import Therapistphotoshoot2 from "../assets/Images/Therapist Photoshoot Idea 2.png";
import Therapistphotoshoot3 from "../assets/Images/Therapist Photoshoot Idea 3.png";
import Therapistphotoshoot4 from "../assets/Images/Therapist Photoshoot Idea 4.png";

const Section4 = () => {
  return (
    <div className="flex flex-col bg-white">
      <h1 className="text-5xl max-md:text-3xl py-24 font-LibreBold text-black text-center">
        Meet our Consultant Experts
      </h1>
      <div className="relative flex-1 flex items-center w-full px-10 max-sm:px-2">
        <button className="absolute left-16 bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center">
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

        <div className="flex items-center w-full overflow-x-auto scroll-smooth space-x-2 justify-around transition-all duration-300 ease-in-out">
          <img
            src={Therapistphotoshoot1}
            alt="Consultant 1"
            className="lg:w-[300px] transition-all duration-300 ease-in-out md:w-[150px] max-md:w-[150px] h-auto"
          />
          <img
            src={Therapistphotoshoot2}
            alt="Consultant 2"
            className="lg:w-[300px] transition-all duration-300 ease-in-out md:w-[150px] max-md:w-[150px] h-auto"
          />
          <img
            src={Therapistphotoshoot3}
            alt="Consultant 3"
            className="lg:w-[300px] transition-all duration-300 ease-in-out md:w-[150px] max-md:w-[150px] h-auto"
          />
          <img
            src={Therapistphotoshoot4}
            alt="Consultant 4"
            className="lg:w-[300px] transition-all duration-300 ease-in-out md:w-[150px] max-md:w-[150px] h-auto"
          />
        </div>

        <button className="absolute right-16 bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center">
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

export default Section4;
