import React from 'react'

const Login = () => {
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

          
          <div className="pl-3 mt-2">
            <input type="checkbox" />
            <span> Remember me. </span>
            <span></span><a href="">Forget Password</a>
          </div>

          <div className="flex justify-center mt-8 ">
            
            <button className=" px-9 py-3 rounded-xl bg-blue-600 hover:text-white">
              Submit
            </button>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
