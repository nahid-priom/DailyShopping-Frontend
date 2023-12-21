import React from "react";
import { logo } from "../assets";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="font-titleFont w-full h-20 bg-white border-b-[1px] border-b-gray-800">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-32" src={logo} alt="logo" />
        </div>
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
            <span className="bg-red-800 absolute w-4 left-6 top-[-8px] text-white rounded-full  text-sm flex justify-center items-center font-semibold">0</span>
          </div>
          <FaRegUserCircle className="text-3xl"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
