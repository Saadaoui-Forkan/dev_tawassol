import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function HeaderRight() {
  const [nav, setNav] = useState(false);
  const [navItems, setNavItems] = useState([]);

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (user) {
      setNavItems([
        { id: 1, text: "Home", link: "/" },
        { id: 2, text: "Posts", link: "/posts" },
        { id: 3, text: "Developers", link: "/developers" },
      ]);
    } else {
      setNavItems([
        { id: 1, text: "Login", link: "/login" },
        { id: 2, text: "Register", link: "/register" },
      ]);
    }
  }, [user]);

  return (
    <>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="rounded mr-2 cursor-pointer duration-300 text-fuchsia-50 p-2 font-bold hover:text-purple-900"
          >
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div
        onClick={handleNav}
        className="block md:hidden mr-4 text-fuchsia-50 cursor-pointer text-lg"
      >
        {nav ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-11 w-[60%] h-full bg-fuchsia-600 ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded hover:bg-purple-600 duration-300 text-fuchsia-50 hover:text-fuchsia-50 border-fuchsia-400 font-bold cursor-pointer"
          >
            <p
              onClick={() => {
                setNav(!nav);
                navigate(item.link);
              }}
            >
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HeaderRight;
