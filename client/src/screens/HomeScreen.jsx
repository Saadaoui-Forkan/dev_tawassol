import React from "react";
import { Link } from "react-router-dom";

function HomeScreen() {
  
  return (
    <div className="landing">
      <div className="flex flex-col items-center justify-center h-full w-[80%] m-auto text-center">
        <h1 className="font-titillium font-bold text-[30px] bg-[#fff] text-slate-600">
          DevTawassol
        </h1>
        <p className="text-[#fff] font-bold my-4 text-2xl">
          Create your DevTawassol profile and connect with other developers
        </p>
        <h2 className="text-xl rounded-sm bg-fuchsia-600 text-fuchsia-50 p-2 my-2">
          <Link to={'/login'}>Login</Link>
        </h2>
        <h2 className="text-xl rounded-sm bg-fuchsia-50 text-fuchsia-600 p-2">
          <Link to={'/register'}>Register</Link>
        </h2>
      </div>
    </div>
  );
}

export default HomeScreen;
