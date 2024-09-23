import React from "react";
import FooterLogo from "../assets/Images/Frame 13.png";
import Frame41 from "../assets/Images/Frame 41.png";

const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col space-y-2 text-white px-10 pt-10 max-tablet:px-0 font-LibreRegular">
      <div className="container border-primary flex-1 mx-auto flex justify-around gap-8 max-sm:gap-2 py-2">
        <div className="border-2 flex-shrink-0 min-w-[300px] flex-1 flex flex-col items-center justify-center max-tablet:hidden border-blue-500 border-dotted p-4">
          <img src={FooterLogo} alt="Logo" className="mb-4" />
          <img src={Frame41} alt="Socials" className="mb-4" />
        </div>

        <div className="border-2 border-blue-500 border-dotted max-sm:p-4 px-6 py-4">
          <h5 className="text-lg font-semibold mb-4">Services</h5>
          <ul>
            <li className="mb-2 text-sm">
              <a href="#">Individual Therapy</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Couples Therapy</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Teens Therapy</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Friends Therapy</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Family Therapy</a>
            </li>
          </ul>
        </div>

        <div className="border-2 border-blue-500 border-dotted max-sm:p-4 px-6 py-4">
          <h5 className="text-lg font-semibold mb-4">About</h5>
          <ul>
            <li className="mb-2 text-sm">
              <a href="#">About Us</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Our Admin Team</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">For Therapists</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Brand</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="border-2 border-blue-500 border-dotted max-sm:p-4 px-6 py-4">
          <h5 className="text-lg font-semibold mb-4">Useful Links</h5>
          <ul>
            <li className="mb-2 text-sm">
              <a href="#">FAQs</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Emergency Resources</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Insurance Coverage</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Blogs</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Therapist Directory</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mx-10"/>
      <div className="flex justify-between items-center">
        <img src={FooterLogo} alt="Logo" className="w-[125px] h-auto hidden max-tablet:block" />
        <p className="text-sm max-sm:text-xs">© 2023 SerenSpace. All rights reserved.</p>
        <img src={Frame41} alt="Socials" className="w-[100px] hidden max-tablet:block" />
        <div className="flex space-x-4 max-tablet:hidden">
          <a href="#">Download App</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
