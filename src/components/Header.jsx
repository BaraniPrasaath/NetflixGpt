import React from "react";
import { logo } from "../utils/urls";
import { Link, useLocation } from "react-router-dom";

const Header = ({ setsign_in, sign_in }) => {
  const location = useLocation();
  const isSignPage = location.pathname === "/sign-in";

  return (
    <div className="absolute w-full flex justify-between bg-linear-to-b from-black z-10">
      <div className="flex ml-40">
        <Link to="/">
          <img
            className="w-40 h-20 filter contrast-125 cursor-pointer"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="mr-72 my-5">
        <select className="py-1.5 px-4 border border-gray-600 text-white bg-white/10 backdrop-blur-md rounded-sm cursor-pointer">
          <option className="text-black">English</option>
          <option className="text-black">Hindi</option>
        </select>
        <Link to={isSignPage ? "/sign-up" : "/sign-in"}>
          <button className="text-white font-bold text-sm bg-red-600 px-3 py-1.5 rounded-sm mx-2 cursor-pointer hover:bg-red-700 transition duration-300">
            {isSignPage ? "Sign Up" : "Sign In"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
