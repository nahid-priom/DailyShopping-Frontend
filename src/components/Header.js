import React from "react";
import { logo, userLogo } from "../assets";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="sticky top-0 z-50 font-titleFont w-full h-20 bg-white border-b-[1px] border-b-gray-800">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-32" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative flex justify-end items-start">
            <IoCartOutline className="text-3xl cursor-pointer" />
            <span className="bg-orange-800 absolute w-4 left-6 top-[-8px] text-white rounded-full  text-sm flex justify-center items-center font-semibold">
              0
            </span>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={userLogo}
              alt="user logo"
            />
            <text>Nahid Ferdous Priom</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
