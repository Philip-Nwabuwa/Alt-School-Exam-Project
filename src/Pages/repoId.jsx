import React, { useState, useEffect } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import Navbar from "../Components/navBar";
import Footer from "../Components/footer";

const singleRepo = (props) => {
  const { data } = props;
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = `https://api.github.com/repos/Philip-Nwabuwa/${data}`;
  console.log(data);
  useEffect(() => {
    axios.get(URL).then((response) => {
      setRepo(response.data);
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
      <div className="grid grid-cols-1 gap-4 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          Repo by {data[0].owner.login}
          <img
            src={repo.owner.avatar_url}
            alt="avatar"
            className="rounded-full w-32 h-32"
          />
          <h1 className="text-2xl font-bold text-white">{repo.name}</h1>
          <p className="text-white">{repo.description}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white">Language: {repo.language}</p>
          <p className="text-white">Stars: {repo.stargazers_count}</p>
          <p className="text-white">Forks: {repo.forks_count}</p>
          <p className="text-white">Watchers: {repo.watchers_count}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default singleRepo;
