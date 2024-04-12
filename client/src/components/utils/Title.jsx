import React from "react";

function Title({ children }) {
  return (
    <h1 className="mx-4 text-xl text-slate-500 pl-2 my-2 border-l-4 font-titillium font-bold border-fuchsia-400">
        {children}
    </h1>
  );
}

export default Title;
