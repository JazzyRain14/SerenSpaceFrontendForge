import React from "react";
import GiftImage from "../assets/Images/GiftImage.png";
import BackgroundImage from "../assets/Images/Hero Section.png";
import Footer from "./Footer.jsx";

const Section8 = () => {
  return (
    <div
      className="bg-[#f3e8f1] py-16 px-8 flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-shrink-0">
          <img
            src={GiftImage}
            alt="Gift a Membership"
            className="w-[400px] h-[400px] rounded-lg shadow-lg ml-40 mt-3"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-Libre-Bold text-black mb-4 leading-tight">
            <span className="block">Gift the gift of a</span>
            <span className="block">SerenSpace</span>
            <span className="block">Membership</span>
          </h1>
          <p className="text-lg mb-8 mt-8 text-black font-LibreRegular font-semibold">
            <span className="block">
              Therapy is one of the most meaningful gifts you can give to{" "}
            </span>
            <span className="block">your friends and loved ones. </span>
          </p>

          <button className="mt-16 w-1/2 bg-[#a73d85] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#882d6d] transition duration-300 ease-in-out">
            Gift a Membership
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section8;
