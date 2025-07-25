//Footer
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-white">
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-700">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm text-gray-800 text-justify">
            TikTok Shop is an integrated e-commerce feature within TikTok that allows users to discover, promote, and purchase products directly through short-form videos and live streams—blending entertainment with shopping for a seamless digital retail experience.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-800 mb-5 text-lg">Company</h2>
            <ul className="text-sm space-y-2 text-gray-800">
              <li>
                <a className="hover:text-[#FE2C55] transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:text-[#FE2C55] transition" href="/about-us">About Us</a>
              </li>
              <li>
                <a className="hover:text-[#FE2C55] transition" href="/contact">Contact Us</a>
              </li>
              <li>
                <a className="hover:text-[#FE2C55] transition" href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-800 mb-5 text-lg">Get in touch</h2>
            <div className="text-sm space-y-2 text-gray-800">
              <p>+6012-3456789</p>
              <p>teknologia05@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm bg-black text-white">
        Copyright 2025 © <span className="text-[#FE2C55]">Teknologia</span> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;