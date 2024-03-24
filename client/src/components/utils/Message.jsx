import React from "react";

function Message({ children, error, success }) {
  let variant;
  error
    ? (variant = "text-red-700 bg-red-200")
    : success
    ? (variant = "text-green-700 bg-green-200")
    : (variant = "text-blue-700 bg-blue-200");

  return (
    <div
      className={`absolute top-20 left-6 w-10/12 md:w-2/3 mx-4 p-2 rounded-lg md:p-3 mb-4 md:text-lg ${variant}`}
    >
      {children}
    </div>
  );
}

export default Message;
