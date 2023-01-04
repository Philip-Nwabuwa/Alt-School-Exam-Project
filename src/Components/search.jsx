import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const search = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/search/users?q=${user}`,
    })
      .then((res) => {
        setRepos(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  console.log(repos);

  return (
    <div>
      <div className="flex pt-24 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="uppercase mb-8">search for any github username</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <label>
              <input
                placeholder="Search for username..."
                type="text"
                className="w-[300px] sm:w-[420px] h-10 p-3 mb-1 text-black rounded-md focus:outline-none focus:border-blue-500 border-solid border-2"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </label>
            {error && (
              <h5 className="items-center justify-center px-2 py-1 rounded-md bg-red-500">
                username not found on guthub
                <p className="pl-[112px]">X</p>
              </h5>
            )}
            <button
              className="text-black px-4 py-2 mt-2 mb-12 rounded-tl-xl rounded-br-xl font-bold bg-slate-100 w-[100px] hover:bg-slate-300"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {(loading && <h1 className="text-center">Loading...</h1>) || (
        <div className="flex justify-center items-center">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col justify-center items-center"
            >
              <Link to={`/repo/${user}`} state={{ user: { repos } }}>
                <span className="my-4">
                  click the image to view your list of repo
                </span>
                <div className="flex w-[250px] justify-center">
                  <img
                    className="w-[150px] h-[150px] rounded-full"
                    src={repo.avatar_url}
                    alt="avatar"
                  />
                </div>

                <h1 className="text-center">{repo.login}</h1>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default search;
