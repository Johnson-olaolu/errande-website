import React from "react";

const BlogCard = () => {
  return (
    <div className=" w-full max-w-96">
      <div className=" relative mb-4">
        <div className=" h-[360px] w-full bg-gray-300 rounded-3xl"></div>
        <div className=" absolute top-5 right-5 bg-erande-blue-opacity-15 px-5 py-3 rounded-full">
          <span className=" text-erande-blue font-antipasto-pro font-medium text-sm lg:text-base">News</span>
        </div>
      </div>
      <div className=" text-erande-blue">
        <p className=" mb-5 text-xs lg:text-sm font-futura-pt">29 JAN 2025 - 10mins Read</p>
        <p className=" text-2xl lg:text-3xl font-antipasto-pro capitalize ">Financial ways in moving forward from porverty.</p>
        <p className="  text-xs lg:text-sm font-futura-pt">
          In a small village nestled between rolling hills and whispering forests, time seemed to flow differently. The air carried the scent of pine
          and rain, and the sound of a nearby.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
