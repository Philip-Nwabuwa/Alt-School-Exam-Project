import React, { useState, useEffect } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import ErrorBoundary from "../Components/errorBoundary";
import Navbar from "../Components/navBar";
import Footer from "../Components/footer";

const singleRepo = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const URL = `https://api.github.com/repos/Philip-Nwabuwa/${location.state.name}`;
  useEffect(() => {
    axios({
      method: "get",
      url: URL,
      auth: "",
    }).then(() => {
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
      <ErrorBoundary>
        <div className=" bg-[#242424] text-white grid grid-cols-1 gap-4 pt-24 items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            Repo by {location.state.owner.login}
            <img
              src={location.state.owner.avatar_url}
              alt="avatar"
              className="rounded-full w-32 h-32"
            />
            <h1 className="text-2xl font-bold text-white">
              {location.state.name}
            </h1>
            <p>{location.state.description}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>Stars: {location.state.stargazers_count}</p>
            <p>Forks: {location.state.forks_count}</p>
            <p>Watchers: {location.state.watchers_count}</p>
            <p>Open Issues: {location.state.open_issues_count}</p>
            <p>
              last updated: {new Date(location.state.updated_at).toDateString()}
            </p>
          </div>
          <button>
            <a href={location.state.html_url} target="_blank" rel="noreferrer">
              View on Github
            </a>
          </button>
        </div>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default singleRepo;
