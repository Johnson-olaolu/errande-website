import ServiceCard from "@/components /ServiceCard";
import Link from "next/link";
import React from "react";
import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";

const Services = () => {
  return (
    <section className="py-8 px-8 lg:px-28 ">
      <div className="">
        <div className=" text-center text-erande-blue max-w-[900px] mx-auto w-full">
          <h2 className=" font-antipasto-pro text-xl lg:text-4xl mb-2 font-bold capitalize">Captain, the city is your ocean — we’re your fleet.</h2>
          <p className=" font-futura-pt text-sm lg:text-xl">Erande will run every errand you command with lightning speed.</p>
        </div>
        <div className=" mt-1 lg:mt-2 ">
          <p className="font-futura-pt text-sm lg:text-xl mb-2 text-center text-erande-blue">Get the Erande app from</p>
          <div className=" flex items-center justify-center lg:gap-5">
            <Link
              href=""
              className=" capitalize flex items-center py-2 lg:py-4 px-3 lg:px-8 rounded-full border border-erande-blue text-erande-blue font-futura-pt text-lg mr-4 gap-2.5 hover:bg-erande-blue hover:text-white transition-colors duration-300 fontm"
            >
              <BiLogoPlayStore size={24} />
              <span className="hidden lg:inline">Download on Google Play</span>
            </Link>
            <Link
              href=""
              className=" capitalize flex items-center py-2 lg:py-4 px-3 lg:px-8 rounded-full border border-erande-blue text-erande-blue font-futura-pt text-lg mr-4 gap-2.5 hover:bg-erande-blue hover:text-white transition-colors duration-300 fontm"
            >
              <BiLogoApple size={24} />
              <span className="hidden lg:inline">Download on Apple Store</span>
            </Link>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 mt-12 lg:mt-20 gap-12 justify-items-center">
        <ServiceCard
          title="send errands "
          description="Clean, shop, and wash your clothes from the comfort of your home."
          imageUrl="/images/Customer-services-1.png"
          color="blue"
        />
        <ServiceCard
          title="Affordable prices"
          description="Enjoy zero extra fees and affordable meal, Erande got you covered."
          imageUrl="/images/Customer-services-2.png"
          color="blue"
        />
        <ServiceCard
          title="Enjoy good food"
          description="Savor tasty dishes and products from your favorite local restaurants and shops."
          imageUrl="/images/Customer-services-3.png"
          color="blue"
        />
      </div>
    </section>
  );
};

export default Services;
