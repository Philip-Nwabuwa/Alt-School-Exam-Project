import React from "react";
import { Link } from "react-router-dom";
import pageError from "../Assets/pageError.svg";

const page404 = () => {
  return (
    <div>
      <img src={pageError} alt="" width={250} height={250} />
      <h1 className="text-2xl font-bold">Opps</h1>
      <p className="text-xl">Page not found</p>
      <Link to={"/"}>
        <button className="bg-[#242424] text-white px-4 py-2 rounded-md mt-4 hover:bg-[#1b1b1b]">
          Go back
        </button>
      </Link>
    </div>
  );
};

export default page404;
