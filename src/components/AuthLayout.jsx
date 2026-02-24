import { Link, Outlet } from "react-router-dom";
import { welcome_poster } from "../utils/urls";
import Header from "./Header";

const AuthLayout = () => {
  return (
    <div className="relative h-screen w-full">
      <Header />

        <img
          src={welcome_poster}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

      <div className="absolute inset-0 bg-black/70 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
