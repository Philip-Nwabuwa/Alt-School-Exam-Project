import React from "react";
import { Helmet } from "react-helmet-async";
import Search from "../Components/search";

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
      <div className="main">
        <Search />
      </div>
    </>
  );
};

export default home;
