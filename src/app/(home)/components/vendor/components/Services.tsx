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
          <Link
            href=""
            className=" capitalize flex items-center py-2 lg:py-4 px-3 lg:px-8 rounded-full border border-erande-black text-erande-black font-futura-pt text-lg mr-4 gap-2.5 hover:bg-erande-black hover:text-white transition-colors duration-300 fontm"
          >
            <BiLogoPlayStore size={24} />
            <span className="hidden lg:inline">Download on Google Play</span>
          </Link>
          <Link
            href=""
            className=" capitalize flex items-center py-2 lg:py-4 px-3 lg:px-8 rounded-full border border-erande-black text-erande-black font-futura-pt text-lg mr-4 gap-2.5 hover:bg-erande-black hover:text-white transition-colors duration-300 fontm"
          >
            <BiLogoApple size={24} />
            <span className="hidden lg:inline">Download on Apple Store</span>
          </Link>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 mt-12 lg:mt-32 gap-12">
        <ServiceCard
          title="Send errands "
          description="Clean, shop, and wash your clothes from the comfort of your home."
          imageUrl="/images/Customer-services-1.png"
          color="black"
        />
        <ServiceCard
          title="Affordable prices"
          description="Enjoy zero extra fees and affordable meal, erande got you covered."
          imageUrl="/images/Customer-services-2.png"
          color="black"
        />
        <ServiceCard
          title="Enjoy good food"
          description="Enjoy good and nice food and products from different restaurants and shops."
          imageUrl="/images/Customer-services-3.png"
          color="black"
        />
      </div>
    </section>
  );
};

export default Services;
