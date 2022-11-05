import React from "react";
import { Link } from "react-router-dom";
import pageError from "../Assets/pageError.svg";

const page404 = () => {
  return (
    <section className="flex items-center h-screen p-8 dark:bg-gray-900 dark:text-gray-100">
      <div className="block md:flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img src={pageError} alt="" width={400} height={400} />
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page404;
