import React from "react";
import { Link } from "react-router-dom";

const errorPage = () => {
  return (
    <section className="flex items-center h-screen bg-gray-900 text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h1 className="flex font-bold text-4xl">
            Something really went wrong here.
          </h1>
          <p className="pt-4 text-gray-400">
            {" "}
            Cross check your code and try again. If the problem persists, use
            <br />{" "}
            <a
              className="underline italic font-semibold text-yellow-400"
              href="https://stackoverflow.com/"
            >
              Stack Overflow
            </a>
          </p>
        </div>
        <Link
          to="/"
          className="px-8 py-3 mt-4 underline font-semibold rounded text-yellow-400"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default errorPage;
