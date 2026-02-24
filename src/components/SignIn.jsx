import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div
      id="container"
      className="absolute flex flex-col items-center bg-black/70 rounded-lg"
    >
      <div id="inner-container" className="w-3/4 px-2 py-10">
        <div className="pb-5">
          <h1 className="text-2xl font-bold text-white">Sign In</h1>
        </div>
        <div className="flex flex-col">
          <input
            className="p-2 text-gray-200 text-xs bg-gray-800 rounded-sm my-1"
            placeholder="Email or phone number"
          />
          <input
            className="p-2 text-gray-200 text-xs bg-gray-800 rounded-sm my-1"
            placeholder="Password"
          />
        </div>
        <div className="mt-5">
          <button className="text-white w-full font-bold text-xs bg-red-600 px-4 py-2 rounded-sm hover:bg-red-700 cursor-pointer transition duration-300">
            Sign In
          </button>
        </div>
        <div className="flex justify-between my-1">
          <div>
            <p className="text-white text-xs font-light">Remember me</p>
          </div>
          <div>
            <p className="text-white text-xs font-light">Need help?</p>
          </div>
        </div>
        <div className="flex my-2 mt-10">
          <p className="text-white text-xs font-light">New to Netflix?</p>
          <Link to="/sign-up">
            <p className="text-white text-xs font-bold px-1 cursor-pointer hover:text-gray-300">
              Sign up now.
            </p>
          </Link>
        </div>
        <div className="my-2">
          <p className="text-white text-xs font-light">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
