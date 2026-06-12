import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Pagenation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 5;

  // allitems=[,,,,,,,]
  const allitems = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
  }));
  // allitems=[{Id:1},{id:2},3,4,5,6,7,8,,,{id:20}]

  //calculation
  const totalPage = Math.ceil(allitems.length / itemsPerPage);
  const startInd = (currentPage - 1) * itemsPerPage; //0    5
  const stopInd = startInd + itemsPerPage; //5   10
  const currentIterms = allitems.slice(startInd, stopInd);
  //   currentIterms=[1,2,3,4,5]   page1
  //   currentIterms=[6,7,8,9,10]   page2

  //   4.5--- 5
  //   4.2--- 5
  //   4.8---5
  const gotoPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPage) {
      setSearchParams({ page: pageNum });
    }
  };

  const nextPAge = () => {
    if (currentPage < totalPage) {
      gotoPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      gotoPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Product id</h1>
      {/* // allitems=[{Id:1},{id:2},3,4,5,6,7,8,,,{id:20}] */}
      {/* item={id:1} */}
      {currentIterms.map((item) => (
        <div key={item.id}>{item.id}</div>
      ))}
      <div>
        <button onClick={prevPage}>previous</button>
        {/* array=[1,2,3,4,] */}
        <div>
          {Array.from({ length: totalPage }, (_, i) => i + 1).map((pageNum) => (
            <button key={pageNum} onClick={() => gotoPage(pageNum)}>
              {pageNum}
            </button>
          ))}
        </div>
        <button onClick={nextPAge}>next</button>
      </div>
    </div>
  );
}
