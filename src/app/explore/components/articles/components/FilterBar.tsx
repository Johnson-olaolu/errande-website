import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const FilterBar = () => {
  return (
    <div className=" flex items-center justify-between">
      <div className="">
        <div className="items-center gap-2.5 hidden lg:flex">
          <div className=" px-5 py-3 rounded-full bg-erande-blue-opacity-15 text-erande-blue font-antipasto-pro font-medium">All</div>
          <div className=" px-5 py-3 rounded-full border border-[#CECECE] text-erande-blue font-antipasto-pro font-medium">Tips & Hacks</div>
          <div className=" px-5 py-3 rounded-full border border-[#CECECE] text-erande-blue font-antipasto-pro font-medium">Lifestyle</div>
          <div className=" px-5 py-3 rounded-full border border-[#CECECE] text-erande-blue font-antipasto-pro font-medium">Errands</div>
          <div className=" px-5 py-3 rounded-full border border-[#CECECE] text-erande-blue font-antipasto-pro font-medium">New Locations</div>
          <div className=" px-5 py-3 rounded-full border border-[#CECECE] text-erande-blue font-antipasto-pro font-medium">Community</div>
        </div>
        <div className=" inline-flex gap-2 items-center text-erande-blue">
          <div className="  font-antipasto-pro font-medium  text-sm px-7 py-5 bg-[#E4E4E4] rounded-full  lg:hidden">
            <span className="">All</span>
          </div>
          <FaChevronDown size={12} />
        </div>
      </div>

      <div className="">
        <div className=" flex rounded-full gap-2 border border-[#CECECE] items-center capitalize p-2 justify-end">
          <span className=" text-xs  lg:text-sm text-erande-blue font-antipasto-pro font-medium pl-2">Sort By</span>
          <div className=" text-erande-blue font-antipasto-pro font-medium  text-xs lg:text-sm px-5 py-3 bg-[#E4E4E4] rounded-full inline-flex gap-2">
            <span className="">Newest</span>
            <FaChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
