import React from "react";
import Logo from "./header/Logo";
import HeaderRight from "./header/HeaderRight";
import { Link } from "react-router-dom";
import Avatar from "./header/Avatar";
import { useSelector } from "react-redux";

function Header() {
  const {user} = useSelector((state) => state.auth);
  return (
    <div className="fixed w-full top-0 left-0 flex justify-between items-center bg-fuchsia-600 p-2 z-50">
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className="flex items-center justify-center">
        <HeaderRight/>
        {user && <Avatar/>}
      </div>
    </div>
  );
}

export default Header;
