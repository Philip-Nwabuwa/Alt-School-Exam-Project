import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

const footer = () => {
  return (
    <footer className="fixed left-0 bottom-0 w-full text-[#fff]">
      <div className="bg-[#1b1b1b] h-12 px-6 2xl:px-16 flex justify-between items-center border-t-2 border-cyan-50">
        <h1 className="text-center pl-4 font-bold">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by Philip Nwabuwa
        </h1>
        <div className="flex items-center">
          <p className="pr-4 font-bold">Contact Me: </p>
          <a href="https://github.com/Philip-Nwabuwa">
            <AiOutlineGithub size={40} className="pr-4" />
          </a>
          <a href="https://twitter.com/Philip_john64">
            <AiOutlineTwitter size={40} className="pr-4" />
          </a>
          <a href="philipnwabuwa@gmail.com">
            <AiOutlineMail size={40} className="pr-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
