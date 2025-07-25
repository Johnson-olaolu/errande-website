import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Pagination = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className=" flex items-center gap-5">
        <button className=" h-10 lg:h-14 w-10 lg:w-14 inline-flex items-center border-[#CECECE] text-[#CECECE] justify-center border  rounded-full">
          <FaChevronLeft size={12} className="" />
        </button>
        <span className=" text-erande-blue">-</span>
        <div className=" flex items-center gap-2.5">
          <button className=" h-10 lg:h-14 px-3 lg:px-5 inline-flex items-center bg-erande-blue-opacity-15 text-erande-blue justify-center  rounded-full">
            <span className=" font-futura-pt text-xs lg:text-base">1</span>
          </button>
          <button className=" h-10 lg:h-14 px-3 lg:px-5 inline-flex items-center border border-[#CECECE] text-erande-blue justify-center  rounded-full">
            <span className=" font-futura-pt text-xs lg:text-base">2</span>
          </button>
          <button className=" h-10 lg:h-14 px-3 lg:px-5 inline-flex items-center border border-[#CECECE] text-erande-blue justify-center  rounded-full">
            <span className=" font-futura-pt text-xs lg:text-base">3</span>
          </button>
        </div>
        <span className=" text-erande-blue">-</span>
        <button className=" h-10 lg:h-14 w-10 lg:w-14 inline-flex items-center border-erande-blue text-erande-blue justify-center border  rounded-full">
          <FaChevronRight size={12} className="" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
