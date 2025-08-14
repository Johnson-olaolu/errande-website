import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex flex-col lg:flex-row pb-24 px-8 lg:px-28 pt-16 lg:pt-32 gap-20">
        <div className="shrink-0 text-white w-60 max-w-full">
          <Image height={33} width={137} src={"/images/Logo-red.png"} alt="Logo" className="mb-8" />
          <ul className="flex flex-col space-y-2 mb-8">
            <li>
              <p className=" text-[#CCCCCC] font-futura-pt text-xs">13 Anthony Udoh Avenue Ajao Estate Lagos</p>
            </li>
            <li>
              <p className=" text-[#CCCCCC] font-futura-pt text-xs">
                Email: <a href="mailto:>info@useerande.com">info@useerande.com</a>
              </p>
            </li>
          </ul>
          <div className=" flex items-center gap-5">
            <a href="#" className="">
              <FaFacebookF className="text-white" size={18} />
            </a>
            <a href="#" className="">
              <FaTwitter className="text-white" size={18} />
            </a>
            <a href="#" className="">
              <FaInstagram className="text-white" size={18} />
            </a>
            <a href="#" className="">
              <FaLinkedinIn className="text-white" size={18} />
            </a>
          </div>
        </div>
        <div className="flex-grow">
          <div className=" flex flex-col lg:flex-row gap-16 lg:gap-20 justify-between capitalize">
            <div className="">
              <h6 className=" text-xl font-antipasto-pro text-white mb-3">Products</h6>
              <ul className=" flex-col flex gap-1">
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    Errand Services
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    Delivery Services
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    Community Engagement
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className=" text-xl font-antipasto-pro text-white mb-3">Explore</h6>
              <ul className=" flex-col flex gap-1">
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    For customers
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    For vendors
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    For runners
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className=" text-xl font-antipasto-pro text-white mb-3">Company</h6>
              <ul className=" flex-col flex gap-1">
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className=" text-xl font-antipasto-pro text-white mb-3">Legal & Compliance</h6>
              <ul className=" flex-col flex gap-1">
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    Terms-And-Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    Privacy-Policy
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    Cookie-Policy
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    (SLA) Service-Level Agreement
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-white opacity-50 font-futura-pt hover:opacity-100">
                    Refund-Dispute-Resolution
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-7 flex items-center justify-center bg-[#1C1C1C]">
        <p className="text-white text-xs">
          © Copyright <strong>Erande.</strong> All Rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
