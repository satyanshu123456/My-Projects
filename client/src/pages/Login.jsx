import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="h-80 w-110 border-1 rounded-md ">
          <div className="flex justify-center">
            <h3 className="text-amber-900 text-3xl underline mb-3 mt-3">
              Login
            </h3>
          </div>

          <div>
            <div className="pl-3 mt-3">
              <label className="pr-2" htmlFor="email">
                Email:-
              </label>
              <input
                type="email"
                id="eamil"
                name="email"
                placeholder="Enter your email"
                className="border-1 px-2 py-1 w-80 rounded"
              />
            </div>

            <div className="pl-3 mt-5">
              <label className="pr-2" htmlFor="name">
                Password:-
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="border-1 px-2 py-1 w-80 rounded"
              />
            </div>
          </div>

          <div className="pl-3 mt-5 flex justify-between">
            <div className="flex">
              <input type="checkbox" />
              <div>
                <span className="pl-2"> Remember me. </span>
              </div>
            </div>
            <div classname="">
              <div className="pr-3">
                <button className="text-blue-700 hover:underline">
                  Forget Password?
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 ">
            <button className=" px-9 py-3 rounded-xl bg-blue-600 hover:text-white">
              Submit
            </button>
          </div>

          <div className="flex justify-center">
            <button className="text-blue-700 hover:underline mt-1">
              Create new account?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
