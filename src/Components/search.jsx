import { useState, useEffect } from "react";
import axios from "axios";

const search = () => {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${user}`);
  };

  const URL = `https://api.github.com/search/users?q=${user}`;
  let API_KEY = import.meta.env.VITE_MSG;

  useEffect(() => {
    axios({
      method: "get",
      url: URL,
      auth: API_KEY,
    }).then((response) => {
      setRepos(response.data);
      setLoading(false);
      console.log(repos);
    });
  }, []);

  return (
    <div>
      <div className="flex pt-24 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1>search for any github username</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label>
                <input
                  placeholder="Search for username..."
                  type="text"
                  className="w-96 h-10 text-black focus:outline-none focus:border-gray-500"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* <h1 className="text-white">{repos.id}</h1> */}
    </div>
  );
};

export default search;
