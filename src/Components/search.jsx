import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";

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
            className="flex justify-center items-center"
          >
            <div className="bg-gray-100 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
              <input
                className="bg-transparent text-black font-bold placeholder:text-gray-300 p-2 w-full focus:outline-none"
                type="text"
                placeholder="Search for username..."
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <BiSearchAlt
                onClick={handleSubmit}
                className="text-black cursor-pointer"
                type="submit"
                size={25}
              />
            </div>
          </form>
          {error && (
            <h5 className="items-center justify-center px-2 py-1 rounded-md bg-red-500">
              username not found on guthub
              <p className="pl-[112px]">X</p>
            </h5>
          )}
        </div>
      </div>
      {(loading && <h1 className="text-center">Loading...</h1>) || (
        <div className="grid grid-cols-5 gap-4">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col justify-center items-center"
            >
              <Link to={`/repo/${user}`} state={{ user: { repos } }}>
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
