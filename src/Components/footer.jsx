import React from "react";

const footer = () => {
  return (
    <div className="mt-3">
      <footer className="bg-[#1b1b1b] h-12 flex justify-center items-center border-t-2 border-cyan-50">
        <h1 className="text-[#fff] text-center">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by Philip Nwabuwa
        </h1>
      </footer>
    </div>
  );
};

export default footer;
