import React, { useState } from "react";
import { BiNews } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  let Links = [
    { name: "BUSINESS", link: "/business" },
    { name: "ENTERTAINMENT", link: "/entermainment" },
    { name: "HEALTH ", link: "/health " },
    { name: "SCIENCE", link: "/Science" },
    { name: "SPORTS", link: "/sports" },
    { name: "TECHNOLOGY", link: "/technology" },
  ];
  return (
    <div className="shadow-md w-full relative top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Link to="/">
          <div className="font-bold cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <BiNews />
            </span>
            <p className="text-3xl">News</p>
          </div>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white z-50 md:z-auto z-[-1] left-0 w-full 
        md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in 
        ${open ? "top-20 opacity-100  " : "top-[-490px]"}`}
        >
          {Links.map((Link) => (
            <li
              key={Link.name}
              className={`md:ml-12 text-xl md:my-0 my-7 ${
                open ? "border-b-2 pb-3 border-slate-300" : ""
              }`}
            >
              <a
                href={Link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {Link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
