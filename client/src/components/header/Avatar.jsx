import React, { useState } from "react";
import avatar from "../../img/avatar.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/apiCalls/authApiCall";
import { useNavigate } from "react-router-dom";

function Avatar() {
  const [dropdown, setDropdown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const logout = () => {
    dispatch(logoutUser());
    navigate('/login')
  };

  const DropdownMenu = () => {
    return (
      <div
        className={
          dropdown
            ? `w-20 bg-slate-50 flex flex-col absolute top-14 right-2 duration-500 ease-in-out`
            : `w-20 bg-slate-50 flex flex-col absolute top-14 right-[-100%] duration-500 ease-in-out`
        }
      >
        <div className="absolute right-2 top-[-7px] w-4 border-solid border-b-slate-50 border-b-8 border-x-transparent border-x-8 border-t-0"></div>
        <span className="text-slate-600 p-2 hover:bg-fuchsia-500 hover:text-slate-50 hover:font-bold duration-200">
          Profile
        </span>
        <button
          type="button"
          onClick={logout}
          className="text-slate-600 p-2 hover:bg-fuchsia-500 hover:text-slate-50 hover:font-bold duration-200"
        >
          Logout
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="w-10 h-10">
        <img
          src={avatar}
          alt={avatar}
          className="h-full w-full rounded-full hover:cursor-pointer"
          onClick={handleDropdown}
        />
      </div>
      <DropdownMenu />
    </>
  );
}

export default Avatar;
