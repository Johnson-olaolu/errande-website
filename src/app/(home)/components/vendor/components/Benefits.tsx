import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";

const Benefits = () => {
  return (
    <section className="relative px-8 lg:px-28 overflow-hidden">
      <div className=" flex flex-col-reverse lg:flex-row justify-between items-start py-20 lg:py-64 relative z-10">
        <div className=" pt-10">
          <div className=" text-center lg:text-left mb-5 lg:mb-12 lg:w-[432px] w-full">
            <h6 className="capitalize font-antipasto-pro text-2xl lg:text-4xl text-erande-black font-bold">No clutter. No confusion.</h6>
            <p className=" text-erande-black text-xs lg:text-xl font-antipasto-pro capitalize">
              Just the data that matters — presented simply and beautifully, so you can focus on what you do best: serving your customers.
            </p>
          </div>
          <div className=" flex items-center  gap-3">
            <Link
              href=""
              className=" w-full  capitalize flex items-center justify-center text-sm py-1 lg:py-2 px-3 lg:px-5 rounded-full border-erande-black border-2 text-erande-black font-futura-pt lg:text-lg  hover:bg-erande-black hover:text-white transition-colors duration-300"
            >
              to become a vendor Sign Up now
            </Link>
          </div>
        </div>
        <Image src="/images/Vendor-benefit1.png" alt="Vendor Benefit" height={498} width={702} className="w-full lg:w-[702px]" />
      </div>
      <Image
        src="/icons/star-line.svg"
        alt="Star line"
        height={42}
        width={1080}
        className="absolute bottom-8 lg:bottom-32 -right-20 lg:right-8 h-11"
      />
      <Image
        src="/icons/star-line.svg"
        alt="Star line"
        height={42}
        width={1080}
        className="absolute top-8 lg:top-32 -left-56 transform -scale-x-100 h-11"
      />
    </section>
  );
};

export default Benefits;
