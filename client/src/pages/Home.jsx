import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-center h-[100vh] items-center">
        <div className="flex gap-5">
          <div>
            <button className="border-1 px-3 py-3 rounded bg-blue-600 text-white">
              <Link to="/login">Login</Link>
            </button>
          </div>
          <div>
            <button className="border-1 px-3 py-3 rounded bg-blue-600 text-white">
              <Link to="/register">SignUp</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
