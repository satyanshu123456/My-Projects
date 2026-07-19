import React from "react";

const Navbar = () => {
  return (
    <div className="h-17 w-full bg-blue-600 flex justify-between items-center">
      <div className="group cursor-pointer">
        <span className="inline group-hover:hidden font-bold text-2xl pl-4">Vibes</span>

        <span className="hidden group-hover:inline font-bold text-2xl pl-4">& Views</span>
      </div>
      <div className="flex gap-3">
        <div>
          <button className="h-9 w-17   rounded-xl hover:bg-emerald-400 font-bold">
            Login
          </button>
        </div>
        <div>
          <button className="h-9 w-17  font-bold  border-1 border-white rounded-lg hover:text-white  bg-orange-400 ">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
