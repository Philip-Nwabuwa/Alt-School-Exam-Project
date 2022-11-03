import React, { useState, useEffect } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import Navbar from "../Components/navBar";
import Paginate from "../Components/paginate";
import Footer from "../Components/footer";

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
        <InfinitySpin width="200" color="#fff" />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Paginate data={repos} />
      <Footer />
    </div>
  );
};

export default ListOfRepos;
