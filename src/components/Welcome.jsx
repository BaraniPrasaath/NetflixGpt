import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="text-center px-6">
      <div className="mt-44">
        <h1 className="text-white font-bold text-6xl">Unlimited movies,</h1>

        <h1 className="text-white font-bold text-6xl mt-4">shows, and more</h1>

        <h4 className="text-white font-bold text-lg mt-4">
          Starts at ₹149. Cancel at any time.
        </h4>

        <p className="text-white text-lg mt-10">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>

      <div className="flex mt-4 justify-center">
        <Link
          to="/sign-up"
          className="text-white font-bold text-sm bg-red-600 px-4 py-2 rounded-sm mx-2 hover:bg-red-700 transition duration-300"
        >
          Sign Up
        </Link>

        <Link
          to="/sign-in"
          className="text-white font-bold text-sm bg-red-600 px-4 py-2 rounded-sm mx-2 hover:bg-red-700 transition duration-300"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
