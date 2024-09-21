import React from "react";
import FooterLogo from "../assets/Images/Frame 13.png";
import Frame41 from "../assets/Images/Frame 41.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-10 font-LibreRegular">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="border-2 border-blue-500 border-dotted p-4">
          <img src={FooterLogo} alt="Logo" className="mb-4" />
          <img src={Frame41} alt="Socials" className="mb-4" />
        </div>

        <div className="border-2 border-blue-500 border-dotted p-4">
          <h5 className="text-lg mb-4">Services</h5>
          <ul>
            <li className="mb-2">
              <a href="#">Individual Therapy</a>
            </li>
            <li className="mb-2">
              <a href="#">Couples Therapy</a>
            </li>
            <li className="mb-2">
              <a href="#">Teens Therapy</a>
            </li>
            <li className="mb-2">
              <a href="#">Friends Therapy</a>
            </li>
            <li className="mb-2">
              <a href="#">Family Therapy</a>
            </li>
          </ul>
        </div>

        <div className="border-2 border-blue-500 border-dotted p-4">
          <h5 className="text-lg mb-4">About</h5>
          <ul>
            <li className="mb-2">
              <a href="#">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#">Our Admin Team</a>
            </li>
            <li className="mb-2">
              <a href="#">For Therapists</a>
            </li>
            <li className="mb-2">
              <a href="#">Brand</a>
            </li>
            <li className="mb-2">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="border-2 border-blue-500 border-dotted p-4">
          <h5 className="text-lg mb-4">Useful Links</h5>
          <ul>
            <li className="mb-2">
              <a href="#">FAQs</a>
            </li>
            <li className="mb-2">
              <a href="#">Emergency Resources</a>
            </li>
            <li className="mb-2">
              <a href="#">Insurance Coverage</a>
            </li>
            <li className="mb-2">
              <a href="#">Blogs</a>
            </li>
            <li className="mb-2">
              <a href="#">Therapist Directory</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center mt-8">
        <div className="text-sm">© 2023 SerenSpace. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="#">Download App</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
