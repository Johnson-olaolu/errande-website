import WorldViewIcon from "@/assets/icons/WorldViewIcon";
import Image from "next/image";
import React from "react";

const Locations = () => {
  return (
    <section className="pb-56 lg:pb-96">
      <div className="bg-erande-blue mt-20 lg:mt-60 pt-40 px-8 lg:px-28 pb-[332px] lg:pb-[500px] relative">
        <div className="">
          <div className=" text-left text-white max-w-[900px] w-full">
            <h2 className=" font-antipasto-pro text-xl lg:text-5xl mb-2 font-bold capitalize">Rest assured, we&apos;ve got you</h2>
            <p className=" font-futura-pt text-sm lg:text-xl">
              Erande gives you the most efficient service that no one has ever seen. We have compiled information and analysis that helps us better
              the services we render.
            </p>
          </div>
          <div className="mt-20 rounded-2xl lg:rounded-3xl border border-white p-2.5 lg:p-5">
            <ul className=" space-y-4 lg:space-y-7">
              {[...Array(7)].map((_, index) => (
                <li key={index} className=" p-4 lg:p-7 rounded-2xl border border-white flex items-center justify-between gap-4">
                  <p className=" text-white font-futura-pt text-lg lg:text-3xl">Lagos (Igando)</p>
                  <WorldViewIcon className="h-6 lg:h-12" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" absolute bottom-0 left-0 w-full px-8 lg:px-28 transform translate-y-1/2">
          <div className=" flex flex-col-reverse lg:flex-row  items-center justify-between rounded-3xl lg:rounded-[40px] border border-white bg-erande-blue px-12 lg:px-16 py-16 lg:py-28 ">
            <Image src="/icons/trophy.svg" alt="trophy" width={490} height={520} className=" w-auto h-56 lg:h-[520px]" />
            <div className=" text-center lg:text-right">
              <p className="text-white font-antipasto-pro text-xl lg:text-5xl">Pay-As-You-Go fees</p>
              <p className="text-white font-antipasto-pro font-medium text-4xl lg:text-8xl">Pricing & Plans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
