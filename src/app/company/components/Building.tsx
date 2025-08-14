import Image from "next/image";
import React from "react";

const Building = () => {
  return (
    <section className=" bg-erande-blue px-5 lg:px-24 pt-12 lg:pt-40 pb-28 lg:pb-52">
      <div className="text-white w-full ">
        <h2 className=" text-3xl lg:text-4xl font-antipasto-pro capitalize font-bold">What We’re Building</h2>
        <p className=" mt-4 lg:mt-11  text-sm lg:text-xl font-futura-pt text-justify">
          Erande is a comprehensive, one-stop-shop errand services marketplace built specifically for the Nigerian lifestyle. We merge technology with
          empathy to deliver personalized, real time support for everyday needs. Through partnerships with local vendors, runners, and logistics
          providers, we connect users to a curated network of trusted service providers, all in one app.
        </p>
      </div>
      <div className="mt-8 lg:mt-28 flex items-center justify-between flex-col lg:flex-row gap-10">
        <div className=" bg-white flex flex-col items-center rounded-2xl py-20 px-10 w-full max-w-[390px]">
          <Image src="/images/Building1.png" height={156} width={156} alt="building1" />
          <div className=" text-center text-erande-blue mt-8">
            <h6 className=" font-antipasto-pro text-2xl lg:text-3xl capitalize">
              One-stop <br /> platform for errands
            </h6>
            <p className=" font-futura-pt text-xs lg:text-sm ">Clean, shop, and wash your clothes from the comfort of your home.</p>
          </div>
        </div>
        <div className=" bg-white flex flex-col items-center rounded-2xl py-20 px-10 w-full max-w-[390px]">
          <Image src="/images/Building2.png" height={156} width={156} alt="building1" />
          <div className=" text-center text-erande-blue mt-8">
            <h6 className=" font-antipasto-pro text-2xl lg:text-3xl capitalize">
              Real-time tracking <br />
              and transparency
            </h6>
            <p className=" font-futura-pt text-xs lg:text-sm ">Clean, shop, and wash your clothes from the comfort of your home.</p>
          </div>
        </div>
        <div className=" bg-white flex flex-col items-center rounded-2xl py-20 px-10 w-full max-w-[390px]">
          <Image src="/images/Building3.png" height={156} width={156} alt="building1" />
          <div className=" text-center text-erande-blue mt-8">
            <h6 className=" font-antipasto-pro text-2xl lg:text-3xl capitalize">
              Safe Fund <br />
              infrastructure
            </h6>
            <p className=" font-futura-pt text-xs lg:text-sm ">Clean, shop, and wash your clothes from the comfort of your home.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Building;
