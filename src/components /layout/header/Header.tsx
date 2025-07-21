"use client";
import DownloadIcon from "@/assets/icons/DownloadIcon";
import MenuIcon from "@/assets/icons/MenuIcon";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import MobileMenu from "./components/MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:block px-24 py-4 -mb-24 relative z-10">
        <div className="flex items-center justify-between">
          <Image src="/images/Logo-red.png" alt="Logo" width={122} height={27} className="h-8 w-auto" />
          <div className="flex items-center gap-16">
            <nav className="capitalize">
              <ul className="flex items-center space-x-8">
                <li className="">
                  <a
                    href=""
                    className=" px-4 py-1.5 rounded-full text-white font-futura-pt text-sm border border-transparent hover:border-white bg-opacity-15"
                  >
                    Company
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className=" px-4 py-1.5 rounded-full text-white font-futura-pt text-sm border border-transparent hover:border-white bg-opacity-15"
                  >
                    Services
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className=" px-4 py-1.5  rounded-full text-white font-futura-pt text-sm border border-transparent hover:border-white bg-opacity-15"
                  >
                    Explore
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className=" px-4 py-1.5  rounded-full text-white font-futura-pt text-sm border border-transparent hover:border-white bg-opacity-15"
                  >
                    Legal
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className=" px-4 py-1.5  rounded-full text-white font-futura-pt text-sm border border-transparent hover:border-white bg-opacity-15"
                  >
                    Contact
                  </a>
                </li>
                <li className="relative group">
                  <div className="">
                    <a href="" className=" px-4 py-1.5 rounded-full text-white font-futura-pt text-sm border  border-white bg-transparent ">
                      Customer
                    </a>
                    <FaChevronDown size={16} className="inline ml-2 text-white" />
                  </div>
                  <div className=" absolute top-full left-0 mt-6 w-full group-hover:block hidden bg-amber-400 ">
                    <ul className=" flex flex-col gap-2">
                      <li className="">
                        <a
                          href=""
                          className=" px-4 py-1.5  rounded-full text-white font-futura-pt text-sm border border-transparent hover:border-white bg-opacity-15"
                        >
                          Customer
                        </a>
                      </li>
                      <li className="">
                        <a
                          href=""
                          className=" px-4 py-1.5  rounded-full text-white font-futura-pt text-sm border border-transparent hover:border-white bg-opacity-15"
                        >
                          Runner
                        </a>
                      </li>
                      <li className="">
                        <a
                          href=""
                          className=" px-4 py-1.5  rounded-full text-white font-futura-pt text-sm border border-transparent hover:border-white bg-opacity-15"
                        >
                          Vendor
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
            <DownloadIcon className="h-14 w-14 text-white" />
          </div>
        </div>
      </header>
      {/* Mobile Header */}
      <header className="lg:hidden py-3.5 -mb-24 relative z-10">
        <div className=" flex justify-between px-5">
          <div className="">
            <Image src="/images/Logo-red-mobile.png" alt="Logo" width={41} height={37} className="" />
          </div>
          <div className="flex gap-4 items-center">
            <MenuIcon onClick={() => setShowMobileMenu(true)} className="h-10 w-10 text-white" />
            <DownloadIcon className="h-10 w-10 text-white" />
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <MobileMenu showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
    </>
  );
};

export default Header;
