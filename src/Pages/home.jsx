import React from "react";
import { Helmet } from "react-helmet-async";
import Search from "../Components/search";

const home = () => {
  return (
    <>
      <Helmet>
        <title>GitHub 2.1</title>
        <meta
          name="description"
          content="search for github users and their repositories"
        />
        <link rel="canonical" to={`/repo/:repoId`} />
      </Helmet>
      <div>
        <Search />
      </div>
    </>
  );
};

export default home;
