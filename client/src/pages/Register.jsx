import React from "react";

const Register = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="h-123 w-110 border-1 rounded-md ">
          <div className="flex justify-center">
            <h3 className="text-amber-900 text-3xl underline mb-3 mt-3">
              Registration
            </h3>
          </div>

          <div className="pl-3 mt-3">
            <label className="pr-2" htmlFor="name">
              Full Name:-
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="border-1 px-2 py-1 w-80 rounded"
            />
          </div>

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
          <div className="pl-3 mt-3">
            <label className="pr-2" htmlFor="number">
              Moblie:-
            </label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Mobile Number"
              className="border-1 px-2 py-1 w-80 rounded"
            />
          </div>
          <div className="flex">
            <div className="pl-3 mt-3">
              <label className="pr-2" htmlFor="name">
                Gender:-
              </label>
              <select
                name="gender"
                id="gender"
                className="w-32 border-1 px-2 py-1 rounded"
              >
                <option value="Select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="pl-3 mt-3">
              <label className="pr-2" htmlFor="name">
                DOB:-
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="border-1 px-2 py-1 w-35 rounded"
              />
            </div>
          </div>

          <div className="pl-3 mt-3">
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

          <div className="pl-3 mt-3">
            <label className="pr-2" htmlFor="name">
              Confirm <br /> Password:-
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Confirm Password"
              className="border-1 px-2 py-1 w-80 rounded"
            />
          </div>

          <div className="pl-3 mt-2">
            <input type="checkbox" />
            <span> I agree to Terms & Conditions. </span>
          </div>

          <div className="flex justify-center mt-8 ">
            
            <button className=" px-9 py-3 rounded-xl bg-blue-600 hover:text-white">
              Submit
            </button>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
