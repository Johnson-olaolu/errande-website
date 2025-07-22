import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";

const Step2 = () => {
  return (
    <div className=" px-7 lg:px-44 py-8 lg:py-48 bg-erande-black rounded-3xl lg:rounded-4xl flex flex-col lg:flex-row items-start lg:justify-between relative h-[600px] lg:h-[760px] ">
      <Image
        src="/images/Customer-step2.png"
        alt="Step 2"
        className="object-cover lg:absolute top-16 right-20 w-full lg:w-[472px]"
        width={472}
        height={472}
      />
      <div className="">
        <div className="  text-left mb-5 lg:mb-10">
          <h6 className="capitalize font-antipasto-pro text-3xl lg:text-6xl text-white">
            Step <br /> two
          </h6>
          <p className=" text-white text-sm lg:text-xl font-antipasto-pro capitalize">
            Look for a vendor on the app and <br /> products or service you want.
          </p>
        </div>
        <div className=" flex items-center  gap-3">
          <Link
            href=""
            className=" capitalize flex items-center text-sm py-1 lg:py-2 px-3 lg:px-5 rounded-full border-white border-2 text-white font-futura-pt lg:text-lg  hover:bg-white hover:text-shadow-erande-black transition-colors duration-300"
          >
            <BiLogoPlayStore />
          </Link>
          <Link
            href=""
            className=" capitalize flex items-center text-sm py-1 lg:py-2 px-3 lg:px-5 rounded-full border-white border-2 text-white font-futura-pt lg:text-lg  hover:bg-white hover:text-shadow-erande-black transition-colors duration-300"
          >
            <BiLogoApple />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step2;
