import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

const footer = () => {
  return (
    <footer className="fixed left-0 bottom-0 w-full text-[#fff]">
      <div className="bg-[#1b1b1b] h-16 md:h-12 px-6 2xl:px-16 block md:flex md:justify-between items-center border-b-2 border-t-2 border-cyan-50">
        <div className="text-center md:pl-4 font-bold md:inline justify-center">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by <span className="bold text-xl">Philip Nwabuwa</span>
        </div>
        <div className="flex items-center md:flex justify-center">
          <p className="pr-4 font-bold">Contact Me: </p>
          <a href="https://github.com/Philip-Nwabuwa">
            <AiOutlineGithub size={40} className="pr-4 hover:text-[#c0efff]" />
          </a>
          <a href="https://twitter.com/Philip_john64">
            <AiOutlineTwitter size={40} className="pr-4 hover:text-[#c0efff]" />
          </a>
          <a href="mailto: philipnwabuwa@gmail.com">
            <AiOutlineMail size={40} className="pr-4 hover:text-[#c0efff]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
