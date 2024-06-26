import React from "react";

function Input({ type, value, onChange, label, forLabel }) {
  return (
    <div className="relative my-6">
      <input
        type={type}
        id={forLabel}
        className="block px-1 md:px-2.5 pb-1 md:pb-2.5 pt-4 w-full text-lg md:text-xl text-gray-900 bg-transparent rounded-lg border-[2px] border-zinc-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={forLabel}
        className="absolute text-md md:text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-fuchsia-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
