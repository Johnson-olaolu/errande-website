import Image from "next/image";
import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";

interface TeamMemberCardProps {
  name: string;
  position: string;
  image?: string;
  description: string;
  variant?: "large" | "normal" | string;
}
const TeamMemberCard = ({ name, position, image, description, variant = "normal" }: TeamMemberCardProps) => {
  return (
    <>
      {variant === "large" ? (
        <div className=" px-6 lg:px-8 py-8 lg:py-9 pb-11 rounded-3xl border border-erande-blue lg:col-span-2 lg:flex gap-6 items-center">
          {image ? (
            <Image
              height={240}
              width={240}
              src={image}
              alt={`${name}'s photo`}
              className=" w-full lg:w-[300px] lg:h-full object-cover rounded-2xl object-center"
            />
          ) : (
            <div className="lg:w-[300px] lg:h-full bg-gray-200 rounded-2xl mb-6 shrink-0"></div>
          )}
          <div className="mt-10 text-erande-blue">
            <h6 className="text-2xl lg:text-3xl font-antipasto-pro capitalize">
              {name}, {position}:
            </h6>
            <p className=" font-futura-pt text-xs lg:text-sm">{description}</p>
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
      ) : (
        <div className=" px-6 lg:px-8 py-8 lg:py-9 pb-11 rounded-3xl border border-erande-blue">
          {image ? (
            <Image height={240} width={240} src={image} alt={`${name}'s photo`} className="w-full h-60 object-cover rounded-2xl mb-6 object-center" />
          ) : (
            <div className="h-60 w-full bg-gray-200 rounded-2xl mb-6"></div>
          )}
          <div className="mt-10 text-erande-blue">
            <h6 className="text-2xl lg:text-3xl font-antipasto-pro capitalize">
              {name}, {position}:
            </h6>
            <p className=" font-futura-pt text-xs lg:text-sm">{description}</p>
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
      )}
    </>
  );
};

export default TeamMemberCard;
