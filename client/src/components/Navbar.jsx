import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-17 w-full bg-blue-600 flex justify-between items-center">
      <div className="group cursor-pointer">
        <span className="inline group-hover:hidden font-bold text-2xl pl-4">
          Vibes
        </span>

        <span className="hidden group-hover:inline font-bold text-2xl pl-4">
          <Link to="/">& Views</Link>
        </span>
      </div>
      <div className="flex gap-3">
        <div>
          <Link to="/">
            <button className="h-9 w-17 rounded-xl font-bold hover:underline">
              Home
            </button>
          </Link>

          <Link to="/login">
            <button className="h-9 w-17   rounded-xl hover:bg-emerald-400 font-bold">
              Login
            </button>
          </Link>
        </div>
        <div>
          <Link to="/register">
            <button className="h-9 w-17  font-bold  border-1 border-white rounded-lg hover:text-white  bg-orange-400 ">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
