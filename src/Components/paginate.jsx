import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const paginate = (props) => {
  const { data } = props;
  const [repos, setRepos] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;
  console.log(data);

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
      <h1 className="text-2xl text-center justify-center font-bold pt-10 pb-5">
        List of Repos by {data[0].owner.login}
      </h1>
      <div className="grid grid-cols-1 gap-4 items-center justify-center">
        {repos.map((repos) => (
          <div
            className="bg-[#1b1b1b] p-4 item-center justify-center w-[60%] rounded-md"
            key={repos.id}
          >
            <Link params={{ data: { repos } }} to={`/repo/${repos.id} `}>
              <h1 className="text-xl font-bold">
                {repos.name}-{repos.id}
              </h1>
            </Link>
          </div>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center py-5"
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
