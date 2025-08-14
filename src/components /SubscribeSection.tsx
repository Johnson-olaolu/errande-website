import React from "react";

const SubscribeSection = () => {
  return (
    <section className="py-8 lg:py-24 px-8 lg:px-44 bg-[#F4F4F4]">
      <div className=" flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0">
        <div className=" max-w-[460px] text-erande-black">
          <h6 className="text-2xl lg:text-3xl font-antipasto-pro">Subcribe to our Newsletter</h6>
          <p className=" font-futura-pt text-xs lg:text-xl mt-3 pr-20 lg:pr-0 leading-4 lg:leading-8">
            Subscribe for Updates: Stay informed about the latest investor updates, financial results, and announcements by subscribing to our
            newsletter.
          </p>
        </div>
        <div className="flex w-[512px] max-w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2.5 px-6 lg:p-6 rounded-l-lg font-futura-pt grow bg-[#EAEAEA] text-erande-black focus:outline-none text-xs lg:text-base"
          />
          <button className="bg-white text-erande-black rounded-r-lg p-2.5 px-6 lg:p-6 hover:bg-erande-black hover:text-white font-antipasto-pro text-sm lg:text-xl cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
