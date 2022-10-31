import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://api.github.com/users/Philip-Nwabuwa/repos";

const ListOfRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setRepos(response.data);
    });
  }, []);

  // console.log(repos);

  return (
    <div>
      <h1>List of my Repos</h1>
      <ul>
        {repos.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListOfRepos;
