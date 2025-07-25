"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const FilterBar = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [sortBy, setSortBy] = React.useState("Newest");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const categoryNames = ["All", "Tips & Hacks", "Lifestyle", "Errands", "New Locations", "Community"];
  const sortOptions = ["Newest", "Oldest", "Top News"];
  return (
    <div className=" flex items-center justify-between">
      <div className="">
        <div className="items-center gap-2.5 hidden lg:flex">
          {categoryNames.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              disabled={category === selectedCategory}
              className={
                " px-5 py-3 rounded-full  text-erande-blue font-antipasto-pro font-medium cursor-pointer disabled:cursor-auto border  border-[#CECECE] " +
                (category === selectedCategory && "bg-[#E3E7EC] border-none")
              }
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative lg:hidden">
          <button onClick={() => setShowCategoryDropdown(!showCategoryDropdown)} className=" inline-flex gap-2 items-center text-erande-blue ">
            <div className="  font-antipasto-pro font-medium  text-sm px-7 py-5 bg-[#E4E4E4] rounded-full  ">
              <span className="">{selectedCategory}</span>
            </div>
            <FaChevronDown size={12} />
          </button>
          {showCategoryDropdown && (
            <div className="absolute left-0 z-10 mt-2 flex flex-col items-start gap-2">
              {categoryNames.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowCategoryDropdown(false);
                  }}
                  className={
                    "px-4 py-3 whitespace-nowrap rounded-full text-erande-blue bg-[#E3E7EC] cursor-pointer  text-xs lg:text-sm border border-[#A9A9A9] hover:border-erande-blue " +
                    (category === selectedCategory && "!border-erande-blue")
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="">
        <div className=" relative">
          <div className=" flex rounded-full gap-2 border border-[#CECECE] items-center capitalize p-2 justify-end">
            <span className=" text-xs  lg:text-sm text-erande-blue font-antipasto-pro font-medium pl-2">Sort By</span>
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className=" text-erande-blue font-antipasto-pro font-medium  text-xs lg:text-sm px-5 py-3 bg-[#E4E4E4] rounded-full inline-flex gap-2 cursor-pointer"
            >
              <span className="">{sortBy}</span>
              <FaChevronDown />
            </button>
          </div>
          {showSortDropdown && (
            <div className="absolute right-0 z-10 mt-2 flex flex-col items-end gap-2">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSortBy(option);
                    setShowSortDropdown(false);
                  }}
                  className={
                    "px-4 py-3 rounded-full text-erande-blue bg-[#E3E7EC] cursor-pointer  text-xs lg:text-sm border border-[#A9A9A9] hover:border-erande-blue " +
                    (option === sortBy && "!border-erande-blue")
                  }
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
