import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import Navbar from "../Components/navBar";
import Paginate from "../Components/paginate";
import Footer from "../Components/footer";
import ErrorBoundary from "../Components/errorBoundary";

const ListOfRepos = () => {
  const location = useLocation();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = `https://api.github.com/users/${location.state.user.repos[0].login}/repos`;
  let API_KEY = import.meta.env.VITE_MSG;

  useEffect(() => {
    axios({
      method: "get",
      url: URL,
      auth: API_KEY,
    }).then((response) => {
      setRepos(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <InfinitySpin width="200" color="#fff" />
        </div>
      </>
    );
  }
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <div>
          <Paginate data={repos} />
        </div>
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default ListOfRepos;
