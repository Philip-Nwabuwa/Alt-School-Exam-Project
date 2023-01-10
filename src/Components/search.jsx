import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { BiSearchAlt } from "react-icons/bi";
import "../index.css";

const search = () => {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 10;

  let API_KEY = import.meta.env.VITE_MSG;

  useEffect(() => {
    if (!user) {
      setError(false);
      setLoading(false);
      setRepos([]);
      return;
    }
    setLoading(true);
    const fetchRepos = async () => {
      try {
        const { data } = await axios.get(
          "https://api.github.com/search/users",
          {
            params: {
              q: user,
              key: API_KEY,
            },
          }
        );
        setData(data.items);
        setRepos(data.items);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchRepos();
  }, [user]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setRepos(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, data]);

  const onChange = (e) => {
    setUser(e.target.value);
  };

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  console.log(data);

  return (
    <div className="main">
      <div className="flex pt-[80px] justify-center items-center">
        <div className="flex flex-col justify-center text-center items-center">
          <h1 className="uppercase mb-[20px] text-[24px]">
            search for any github username{" "}
            <div className="hidden md:inline">/ organization</div>
          </h1>
          <form
            className="flex justify-center items-center"
            onSubmit={submitHandler}
          >
            <div className="bg-gray-100 rounded-full flex items-center px-2 w-[300px] sm:w-[450px] lg:w-[600px]">
              <input
                className="bg-transparent text-black font-bold placeholder:text-gray-300 p-2 w-full focus:outline-none"
                type="text"
                placeholder="Search for username..."
                value={user}
                onChange={onChange}
              />
              <BiSearchAlt
                onClick={onChange}
                className="text-black cursor-pointer"
                type="submit"
                size={25}
              />
            </div>
          </form>
        </div>
      </div>
      {loading && (
        <div className="flex item-center justify-center mt-[60px]">
          <InfinitySpin width="200" color="#fff" />
        </div>
      )}
      {error && (
        <div className="flex item-center justify-center mt-[60px]">
          <h1 className="text-[#fff] text-[20px]">No user found</h1>
        </div>
      )}

      <ul className="grid main grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-[50px] px-[20px]">
        {repos.map((repo) => (
          <li
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
          </li>
        ))}
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center py-5 md:mt-4 text-xl"
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
