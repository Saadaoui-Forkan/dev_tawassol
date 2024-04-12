import React from "react";

function Button({
  children,
  type,
  lightBtn,
  dangerBtn,
  successBtn,
  secondaryBtn,
  disabled,
  handleClick,
}) {
  let btn;

  lightBtn
    ? (btn = "bg-zinc-200 text-zinc-600 hover:bg-zinc-300")
    : dangerBtn
    ? (btn = "bg-red-600 text-red-50 hover:bg-red-700")
    : secondaryBtn
    ? (btn = "bg-zinc-600 text-zinc-50 hover:bg-zinc-700")
    : successBtn
    ? (btn = "bg-green-500 text-green-50 hover:bg-green-800")
    : (btn = "bg-fuchsia-600 text-fuchsia-50 hover:bg-fuchsia-800");

  return (
    <button
      className={`${btn} p-2 rounded-sm font-bold duration-200 text-sm lg:text-md ${
        disabled ? "cursor-not-allowed" : ""
      }`}
      type={type}
      onClick={handleClick}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
