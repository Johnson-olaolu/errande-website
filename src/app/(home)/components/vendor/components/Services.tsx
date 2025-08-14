import ServiceCard from "@/components /ServiceCard";
import Link from "next/link";
import React from "react";
import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";

const Services = () => {
  return (
    <section className="py-8 px-8 lg:px-28 ">
      <div className="">
        <div className=" text-center text-erande-black max-w-[900px] mx-auto w-full">
          <h2 className=" font-antipasto-pro text-xl lg:text-4xl mb-2 font-bold capitalize">Rest assured, we&apos;ve got you</h2>
          <p className=" font-futura-pt text-sm lg:text-xl">
            Erande gives you the most efficient service that no one has ever seen. We have compiled information and analysis that helps us better the
            services we render.
          </p>
        </div>
        <div className=" mt-7 lg:mt-16 flex items-center justify-center gap-5">
          {/* <Link
            href=""
            className=" capitalize flex items-center py-2 lg:py-4 px-3 lg:px-14 rounded-full border border-erande-black text-erande-black font-futura-pt text-lg mr-4 gap-2.5 hover:bg-erande-black hover:text-white transition-colors duration-300 "
          >
            To become a vendor Sign Up now
          </Link> */}
          <Link
            href=""
            className=" w-full lg:w-auto capitalize flex items-center justify-center text-sm py-1 lg:py-2 px-3 lg:px-5 rounded-full border-erande-black border-2 text-erande-black font-futura-pt lg:text-lg  hover:bg-erande-black hover:text-white transition-colors duration-300"
          >
            To become a vendor Sign Up now
          </Link>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 mt-12 lg:mt-20 gap-12">
        <ServiceCard
          title="Real-Time Tracking"
          description="Track every delivery from your store to your customer — full transparency, zero guesswork."
          imageUrl="/images/Vendor-services-1.png"
          color="black"
        />
        <ServiceCard
          title="Reliable Fulfilment"
          description="Our trained delivery partners ensure your orders get to customers fast and in perfect condition."
          imageUrl="/images/Vendor-services-2.png"
          color="black"
        />
        <ServiceCard
          title="On-Demand Logistics"
          description="Scale your delivery capacity instantly without hiring — plug into our network as needed."
          imageUrl="/images/Vendor-services-3.png"
          color="black"
        />
      </div>
    </section>
  );
};

export default Services;
