import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const paginate = (props) => {
  const { data } = props;
  const [repos, setRepos] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setRepos(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <h1 className="text-2xl text-center justify-center font-bold pt-24 pb-5">
        List of Repos by {data[0].owner.login}
      </h1>
      <div className="w-full">
        <div className="flex flex-col justify-between items-center w-full h-full px-2 2xl:px-16">
          {repos.map((repos) => (
            <div
              className="bg-[#1b1b1b] flex md:p-6 p-4 m-4 items-center justify-between md:w-[80%] w-[90%] rounded-md"
              key={repos.id}
            >
              <h2 className="text-xl font-bold">
                Name: {repos.name}
                <br />
                ID: {repos.id}
              </h2>
              <Link to={`/repo/${repos.id}`} state={repos}>
                <button className="text-[#1b1b1b] bg-white font-bold py-2 px-4 rounded-xl">
                  View Repo
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
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
    </>
  );
};

export default paginate;
