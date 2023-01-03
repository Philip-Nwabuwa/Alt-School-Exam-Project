import React from "react";
import NavBar from "../Components/navBar";
import Search from "../Components/search";
import Footer from "../Components/footer";

const home = () => {
  return (
    <>
      <div>
        <NavBar />
        <Search />
        <Footer />
      </div>
    </>
  );
};

export default home;
