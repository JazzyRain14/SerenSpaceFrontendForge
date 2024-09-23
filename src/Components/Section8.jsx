import React from "react";
import GiftImage from "../assets/Images/GiftImage.png";
import BackgroundImage from "../assets/Images/Hero Section.png";
import Footer from "./Footer.jsx";

const Section8 = () => {
  return (
    <div className="bg-hero-pattern px-[35px] pt-[75px] max-sm:px-[15px] flex justify-between space-x-14 max-sm:space-x-2">
      <div className="w-1/2 h-auto flex items-end justify-center">
        <img
          src={GiftImage}
          alt="Gift a Membership"
          className="h-auto lg:w-[500px]"
        />
      </div>

      <div className="flex flex-col max-md:space-y-5 space-y-10 justify-start max-md:justify-end max-md:mb-6 flex-1">
        <h1 className="text-5xl max-md:text-2xl max-tablet:text-[28px] font-bold font-Libre-Bold text-black">
          Gift the gift of a SerenSpace Membership
        </h1>
        <p className="text-lg my-2 max-sm:text-sm text-black font-RedHat font-semibold">
          Therapy is one of the most meaningful gifts you can give to your friends and loved ones.
        </p>

        <button className="w-1/2 max-md:w-full bg-[#a73d85] text-white px-8 max-sm:p-2 py-4 rounded-full text-lg font-semibold hover:bg-[#882d6d] transition duration-300 ease-in-out">
          Gift a Membership
        </button>
      </div>
    </div>
  );
};

export default Section8;
