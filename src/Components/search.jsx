import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { BiSearchAlt } from "react-icons/bi";
import "../index.css";

const search = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  let API_KEY = import.meta.env.VITE_MSG;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setRepos(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: "get",
      auth: API_KEY,
      url: `https://api.github.com/search/users?q=${user}`,
    })
      .then((res) => {
        setData(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  console.log(user);

  return (
    <div className="main">
      <div className="flex pt-[80px] justify-center items-center">
        <div className="flex flex-col justify-center text-center items-center">
          <h1 className="uppercase mb-[20px] text-[24px]">
            search for any github username{" "}
            <div className="hidden md:inline">/ organization</div>
          </h1>
          <form
            onSubmit={handleSubmit}
            onChange={handleSubmit}
            className="flex justify-center items-center"
          >
            <div className="bg-gray-100 rounded-full flex items-center px-2 w-[300px] sm:w-[450px] lg:w-[600px]">
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
        </div>
      </div>
      {(loading && (
        <div className="flex item-center justify-center mt-[60px]">
          <InfinitySpin width="200" color="#fff" />
        </div>
      )) || (
        <div className="grid main grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-[50px] px-[20px]">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col justify-center items-center bg-[#2b2b2b] hover:bg-[#333333] p-[10px] rounded-3xl"
            >
              <Link to={`/repo/${repo.login}`} state={{ user: { repos } }}>
                <div className="flex items-center text-center justify-center">
                  <img
                    className="w-[100px] h-[100px] rounded-full"
                    src={repo.avatar_url}
                    alt="avatar"
                  />
                </div>
                <div className="bg-[#242424] cursor-pointer text-center rounded-xl mt-[5px]">
                  <h2 className="text-center text-bold text-white px-2 py-1">
                    {repo.login}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center py-5 text-xl"
        pageClassName="px-2"
        pageLinkClassName="text-[#fff] hover:text-[#c0efff]"
        previousClassName="px-2"
        previousLinkClassName="text-[#fff] hover:text-[#c0efff]"
        nextClassName="px-2"
        nextLinkClassName="text-[#fff] hover:text-[#c0efff]"
        breakClassName="px-2"
        breakLinkClassName="text-[#fff] hover:text-[#c0efff]"
        activeClassName="text-[#c0efff]"
      />
    </div>
  );
};

export default search;
