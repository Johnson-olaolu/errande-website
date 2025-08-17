import ServiceCard from "@/components /ServiceCard";
import Link from "next/link";
import React from "react";
import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";

const Services = () => {
  return (
    <section className="py-8 px-8 lg:px-28 ">
      <div className="">
        <div className=" text-center text-erande-red max-w-[900px] mx-auto w-full">
          <h2 className=" font-antipasto-pro text-xl lg:text-4xl mb-2 font-bold capitalize">From street to street, the money moves with you</h2>
          <p className=" font-futura-pt text-sm lg:text-xl">
            Become an Erande Runner:
            <br /> App available on
          </p>
        </div>
        <div className=" mt-7 lg:mt-16 flex items-center justify-center lg:gap-5">
          <Link
            href=""
            className=" capitalize flex items-center py-2 lg:py-4 px-3 lg:px-8 rounded-full border border-erande-red text-erande-red font-futura-pt text-lg mr-4 gap-2.5 hover:bg-erande-red hover:text-white transition-colors duration-300 fontm"
          >
            <BiLogoPlayStore size={24} />
            <span className="hidden lg:inline">Download on Google Play</span>
          </Link>
          <Link
            href=""
            className=" capitalize flex items-center py-2 lg:py-4 px-3 lg:px-8 rounded-full border border-erande-red text-erande-red font-futura-pt text-lg mr-4 gap-2.5 hover:bg-erande-red hover:text-white transition-colors duration-300 fontm"
          >
            <BiLogoApple size={24} />
            <span className="hidden lg:inline">Download on Apple Store</span>
          </Link>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 mt-12 lg:mt-20 gap-12 justify-items-center">
        <ServiceCard
          title="Guaranteed Orders"
          description="We connect you to consistent delivery requests daily — no more idle time, just steady earnings."
          imageUrl="/images/Runner-services-1.png"
          color="red"
        />
        <ServiceCard
          title="Flexible Hours"
          description="Choose your schedule and work at your pace — mornings, evenings, or weekends, it’s all up to you."
          imageUrl="/images/Runner-services-2.png"
          color="red"
        />
        <ServiceCard
          title="Instant Payouts"
          description="Get paid quickly and securely for every completed job — no waiting, no stress."
          imageUrl="/images/Runner-services-3.png"
          color="red"
        />
      </div>
    </section>
  );
};

export default Services;
