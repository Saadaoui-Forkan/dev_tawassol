import React from "react";

function Button({ children, type }) {
  return (
    <button
      className="p-2 rounded-sm bg-fuchsia-700 text-fuchsia-50 font-bold"
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
