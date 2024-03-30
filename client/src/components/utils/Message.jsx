import React from "react";

function Message({ children, error, success }) {
  let variant;
  error
    ? (variant = "text-red-900 bg-red-300")
    : success
    ? (variant = "text-green-900 bg-green-300")
    : (variant = "text-blue-900 bg-blue-300");

  return (
      <div
      className={`w-10/12 md:w-2/3 mx-4 p-2 rounded-lg md:p-3 mb-4 md:text-lg ${variant}`}
    >
      <p>{children}</p>
    </div>
  );
}

export default Message;
