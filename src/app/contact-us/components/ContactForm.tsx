import ProfileCircleIcon from "@/assets/icons/ProfileCircleIcon";
import SMSIcon from "@/assets/icons/SMSIcon";
import VerifyIcon from "@/assets/icons/VerifyIcon";
import React from "react";
import { FaChevronRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <section className=" bg-white py-10 lg:py-40 px-5 lg:px-24">
      <div className=" flex w-full items-center lg:items-start flex-col lg:flex-row gap-12 justify-between mb-20 lg:mb-48">
        <div className="text-erande-blue w-full max-w-[520px] shrink-0 lg:pt-32 text-center lg:text-left">
          <h2 className="text-2xl lg:text-5xl font-antipasto-pro capitalize ">
            Need a hand? <br />
            We’re right here.
          </h2>
          <p className=" mt-2 text-erande-tetiary text-xs lg:text-xl font-futura-pt">
            Your time matters, so help at Erande is always one tap away. Whether it’s a quick question
          </p>
          <div className=" inline-flex items-end gap-7 mt-4 lg:mt-12 text-erande-red text-xl lg:text-3xl">
            <a href="#" className="">
              <FaFacebookF className="" />
            </a>
            <a href="#" className="">
              <FaTwitter className="" />
            </a>
            <a href="#" className="">
              <FaInstagram className="" />
            </a>
            <a href="#" className="">
              <FaLinkedinIn className="" />
            </a>
          </div>
        </div>
        <div className="w-full max-w-[680px]">
          <div className=" rounded-3xl  lg:rounded-4xl border-2 border-erande-blue p-3 lg:p-5 space-y-5 lg:space-y-7">
            <div className="p-4 lg:p-7 border-2 border-erande-blue rounded-2xl flex items-center gap-2 lg:gap-5 text-erande-blue">
              <ProfileCircleIcon className=" h-8 w-8 lg:h-12 lg:w-12" />
              <input type="text" className=" w-full text-sm lg:text-xl font-futura-pt focus:outline-none" placeholder="Full Name" />
            </div>
            <div className="p-4 lg:p-7 border-2 border-erande-blue rounded-2xl flex items-center gap-2 lg:gap-5 text-erande-blue">
              <SMSIcon className="h-8 w-8 lg:h-12 lg:w-12" />
              <input type="text" className=" w-full text-sm lg:text-xl font-futura-pt focus:outline-none" placeholder="Email Address" />
            </div>
            <div className="p-4 lg:p-7 border-2 border-erande-blue rounded-2xl flex items-center gap-2 lg:gap-5 text-erande-blue">
              <VerifyIcon className="h-8 w-8 lg:h-12 lg:w-12" />
              <input type="text" className=" w-full text-sm lg:text-xl font-futura-pt focus:outline-none" placeholder="Select Topic" />
            </div>
            <div className="p-4 lg:p-7 border-2 border-erande-blue rounded-2xl text-erande-blue">
              <textarea
                className=" w-full text-sm lg:text-xl font-futura-pt focus:outline-none resize-none"
                rows={16}
                placeholder="Type Message..."
              />
            </div>
          </div>
          <div className="flex justify-end mt-7">
            <button className=" w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-erande-blue px-5 py-2 text-erande-blue hover:bg-erande-blue hover:text-white cursor-pointer">
              <span className=" font-medium font-futura-pt">Submit</span>
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
      <div className=" px-8 lg:px-52 ">
        <div className="h-px bg-erande-black w-full"></div>
      </div>
    </section>
  );
};

export default ContactForm;
