import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navBar = (props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed w-full h-16 bg-[#1b1b1b] z-[90] top-0">
      <div
        className="flex justify-between items-center w-full h-full px-4 2xl:px-16 text-white shadow-sm font-mono"
        role="navigation"
      >
        <Link to="/" className="font-bold text-lg">
          Github Repos{" "}
          <span className="bg-blue-400 border border-blue-400 rounded-md p-1">
            2.1
          </span>
        </Link>
        <div className="md:block hidden">
          <button>
            <a
              href="https://medium.com/@philipnwabuwa/github-repo-2-1-454071ed9841"
              target="_blank"
              className="p-4"
            >
              Authors Docs
            </a>
          </button>
          <button>
            <a
              href="https://docs.github.com/en/rest"
              target="_blank"
              className="p-4"
            >
              Github Docs
            </a>
          </button>
        </div>
        <div
          onClick={handleNav}
          className="cursor-pointer text-[#ffffff] md:hidden"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#242323] p-4 pl-5 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-4 pl-5 ease-in duration-500"
          }
        >
          <div className="z-[100] pt-5">
            <div className="flex w-full items-center justify-between">
              <Link to="/" className="pl-8 text-2xl">
                Github Repos
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-2">
                List of repos on Github 2.1
              </p>
            </div>
          </div>
          <div className="py-2 flex flex-col">
            <ul className="uppercase">
              <li className="py-3 text-xl underline">
                <a href="https://docs.github.com/en/rest">GitHub Docs</a>
              </li>
            </ul>
            <ul className="uppercase">
              <li className="py-3 text-xl underline">
                <a href="https://medium.com/@philipnwabuwa/github-repo-2-1-454071ed9841">
                  Author Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navBar;
