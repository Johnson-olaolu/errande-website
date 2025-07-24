import React from "react";
import FilterBar from "./components/FilterBar";
import ArticlesGrid from "./components/ArticlesGrid";
import Pagination from "./components/Pagination";

const Articles = () => {
  return (
    <section className="bg-white  px-24">
      <div className=" mb-11">
        <div className="text-erande-blue w-full ">
          <h2 className=" text-4xl font-antipasto-pro capitalize">Our Recent Article</h2>
          <p className=" text-erande-tetiary text-xl font-futura-pt">Stay connected and informed on our latest news and updates.</p>
        </div>
      </div>
      <div className=" mb-24">
        <FilterBar />
        <ArticlesGrid />
        <Pagination />
      </div>
      <div className=" px-8 lg:px-52 ">
        <div className="h-px bg-erande-black w-full"></div>
      </div>
    </section>
  );
};

export default Articles;
