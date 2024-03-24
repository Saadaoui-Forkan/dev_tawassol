import React from "react";
import Logo from "./header/Logo";
import HeaderRight from "./header/HeaderRight";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed w-full top-0 left-0 flex justify-between bg-fuchsia-600 p-4 z-10">
      <Link to={"/"}>
        <Logo />
      </Link>
      <HeaderRight />
    </div>
  );
}

export default Header;
