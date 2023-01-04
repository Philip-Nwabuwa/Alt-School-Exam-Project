import React from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "../Components/navBar";
import Search from "../Components/search";
import Footer from "../Components/footer";

const home = () => {
  return (
    <>
      <Helmet>
        <title>GitHub 2.0</title>
        <meta
          name="description"
          content="search for github users and their repositories"
        />
        <link rel="canonical" to={`/repo/:repoId`} />
      </Helmet>
      <div>
        <NavBar />
        <Search />
        <Footer />
      </div>
    </>
  );
};

export default home;
