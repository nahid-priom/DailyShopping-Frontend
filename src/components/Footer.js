import React from "react";
import { PaymentLogo, logoLight } from "../assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";

import { BsPaypal, BsPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img src={logoLight} alt="logo-light" className="w-32" />
          <p className="max-w-60 text-white text-sm tracking-wide">
            Welcome Here! the company launched a fixed-price marketplace
            business, zShops{" "}
          </p>
          <img src={PaymentLogo} alt="payment logo" className="w-32" />
          <div className="flex gap-5 text-lg text-gray-400">
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaHome className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Sheikh Kamal IT Buisness Incubator</p>
            <p>Mobile: 01798388388</p>
            <p>Email: dailyshopping@gmail.com</p>
            <p>phone: 0982271122</p>
          </div>
        </div>
        <div className="text-base flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white">profile</h2>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPersonFill />
            </span>
            my account
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPaypal />
            </span>
            checkout
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaHome />
            </span>
            Order Tracking
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <MdLocationOn />
            </span>
            Help & Support
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <input className="bg-transparent border px-4 py-2 text-sm" placeholder="e-mail" type="text"/>
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
