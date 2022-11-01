import React, { useState, useEffect } from "react";
import axios from "axios";
import { MagnifyingGlass } from "react-loader-spinner";
import Navbar from "../Components/navBar";
import Paginate from "../Components/paginate";

const ListOfRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = `https://api.github.com/users/Philip-Nwabuwa/repos`;

  useEffect(() => {
    axios.get(URL).then((response) => {
      setRepos(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
          delay={5000}
        />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Paginate data={repos} />
    </div>
  );
};

export default ListOfRepos;
