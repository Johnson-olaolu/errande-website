import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const TeamMemberCard = () => {
  return (
    <div className=" px-6 lg:px-8 py-8 lg:py-9 pb-11 rounded-3xl border border-erande-blue">
      <div className=" h-60 w-full bg-gray-200 rounded-2xl"></div>
      <div className="mt-10 text-erande-blue">
        <h6 className="text-2xl lg:text-3xl font-antipasto-pro capitalize">Stanley Inyang, CEO:</h6>
        <p className=" font-futura-pt text-xs lg:text-sm">
          A marketing and tech strategist with over 10 years leading digital innovation and startup growth.
        </p>
        <div className=" mt-8 flex items-center gap-2.5">
          <a href="" className="">
            <div className=" px-4 lg:px-5 py-2 lg:py-2.5 rounded-full bg-erande-blue-opacity-15  text-erande-blue text-xs lg:text-base">
              <FaLinkedinIn />
            </div>
          </a>
          <a href="" className="">
            <div className=" px-4 lg:px-5 py-2 lg:py-2.5 rounded-full bg-erande-blue-opacity-15  text-erande-blue text-xs lg:text-base">
              <FaTwitter />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
