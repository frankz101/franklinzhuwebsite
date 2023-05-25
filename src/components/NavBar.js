import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const menuLinks = [
  {
    name: "about",
  },
  {
    name: "projects",
  },
  {
    name: "skills",
  },
  {
    name: "contact",
  },
];

const NavBar = () => {
  {
    /* use state is used for toggling mobile menu*/
  }
  const [nav, setNav] = useState();
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-slate-800 fixed">
      <div className="text-3xl ml-2 cursor-pointer hover:scale-105">
        <Link to="home" smooth={true} duration={500}>
          franklin zhu
        </Link>
      </div>
      <ul className="hidden md:flex">
        {/* map that creates links that can scroll to corresponding section */}
        {menuLinks.map((link, index) => (
          <li
            key={index}
            className="px-4 hover:scale-105 cursor-pointer text-2xl py-6 text-gray-500 hover:text-white"
          >
            <Link to={link.name} smooth={true} duration={500}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {/* mobile menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          <p className="cursor-pointer text-2xl py-6 text-gray-500 hover:text-white hover:scale-105">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setNav(!nav)}
            >
              home
            </Link>
          </p>
          {menuLinks.map((link, index) => (
            <li
              key={index}
              className="cursor-pointer text-2xl py-6 text-gray-500 hover:text-white hover:scale-105"
            >
              <Link
                to={link.name}
                smooth={true}
                duration={500}
                onClick={() => setNav(!nav)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
