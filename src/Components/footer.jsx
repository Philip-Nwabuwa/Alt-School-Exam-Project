import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { BsMedium } from "react-icons/bs";

const footer = () => {
  return (
    <footer className="w-full text-[#fff] mt-auto">
      <div className="bg-[#1b1b1b] h-16 md:h-12 px-6 2xl:px-16 block md:flex md:justify-between items-center border-y border-cyan-50">
        <div className="text-center md:pl-4 font-bold md:inline justify-center">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by <span className="bold text-xl">Philip Nwabuwa</span>
        </div>
        <div className="flex items-center md:flex justify-center">
          <p className="pr-4 font-bold">Contact Me: </p>
          <a
            href="https://github.com/Philip-Nwabuwa"
            target={"_blank"}
            alt="Github Link"
          >
            <AiOutlineGithub size={40} className="pr-4 hover:text-[#c0efff]" />
          </a>
          <a
            href="https://twitter.com/Philip_john64"
            target={"_blank"}
            alt="Twitter Link"
          >
            <AiOutlineTwitter size={40} className="pr-4 hover:text-[#c0efff]" />
          </a>
          <a
            href="https://medium.com/@philipnwabuwa/github-repo-2-1-454071ed9841"
            target={"_blank"}
            alt="Medium Link"
          >
            <BsMedium size={40} className="pr-4 hover:text-[#c0efff]" />
          </a>
          <a
            href="mailto: philipnwabuwa@gmail.com"
            target={"_blank"}
            alt="Email Link"
          >
            <AiOutlineMail size={40} className="pr-4 hover:text-[#c0efff]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
