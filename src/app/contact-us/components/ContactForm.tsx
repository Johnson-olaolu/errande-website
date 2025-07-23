import ProfileCircleIcon from "@/assets/icons/ProfileCircleIcon";
import SMSIcon from "@/assets/icons/SMSIcon";
import VerifyIcon from "@/assets/icons/VerifyIcon";
import React from "react";
import { FaChevronRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <section className=" bg-white py-40 px-24">
      <div className=" flex w-full items-start gap-12 justify-between">
        <div className="text-erande-blue w-full max-w-[520px] shrink-0 pt-32">
          <h2 className=" text-5xl font-antipasto-pro capitalize">
            Need a hand? <br />
            We’re right here.
          </h2>
          <p className=" mt-2 text-erande-tetiary text-xl font-futura-pt">
            Your time matters, so help at Erande is always one tap away. Whether it’s a quick question
          </p>
          <div className=" flex items-end gap-7 mt-12 text-erande-red">
            <a href="#" className="">
              <FaFacebookF className="" size={28} />
            </a>
            <a href="#" className="">
              <FaTwitter className="" size={28} />
            </a>
            <a href="#" className="">
              <FaInstagram className="" size={28} />
            </a>
            <a href="#" className="">
              <FaLinkedinIn className="" size={28} />
            </a>
          </div>
        </div>
        <div className="w-full max-w-[680px]">
          <div className="  rounded-4xl border-2 border-erande-blue p-5 space-y-7">
            <div className="p-7 border-2 border-erande-blue rounded-2xl flex items-center gap-5 text-erande-blue">
              <ProfileCircleIcon className=" h-12 w-12" />
              <input type="text" className=" w-full text-xl font-futura-pt focus:outline-none" placeholder="Full Name" />
            </div>
            <div className="p-7 border-2 border-erande-blue rounded-2xl flex items-center gap-5 text-erande-blue">
              <SMSIcon className=" h-12 w-12" />
              <input type="text" className=" w-full text-xl font-futura-pt focus:outline-none" placeholder="Email Address" />
            </div>
            <div className="p-7 border-2 border-erande-blue rounded-2xl flex items-center gap-5 text-erande-blue">
              <VerifyIcon className=" h-12 w-12" />
              <input type="text" className=" w-full text-xl font-futura-pt focus:outline-none" placeholder="Select Topic" />
            </div>
            <div className="p-7 border-2 border-erande-blue rounded-2xl text-erande-blue">
              <textarea className=" w-full text-xl font-futura-pt focus:outline-none h-[382px]" placeholder="Type Message..." />
            </div>
          </div>
          <div className="flex justify-end mt-7">
            <button className=" inline-flex items-center gap-2 rounded-full border-2 border-erande-blue px-5 py-2 text-erande-blue hover:bg-erande-blue hover:text-white cursor-pointer">
              <span className=" font-medium font-futura-pt">Submit</span>
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
