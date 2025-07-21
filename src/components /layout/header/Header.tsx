"use client";
import DownloadIcon from "@/assets/icons/DownloadIcon";
import MenuIcon from "@/assets/icons/MenuIcon";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import MobileMenu from "./components/MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [variant, setVariant] = useState<"white" | "red" | "blue">("white");
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const vhash = window.location.hash.slice(1);
      setHash(vhash);
      if (vhash == "runner" || vhash == "vendor") {
        setVariant("white");
      } else {
        setVariant("red");
      }
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const vhash = window.location.hash.slice(1);
      setHash(vhash);
      if (vhash == "runner" || vhash == "vendor") {
        setVariant("white");
      } else {
        setVariant("red");
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <>
      <header className="hidden lg:block px-24 py-4 -mb-24 relative z-10">
        <div className="flex items-center justify-between">
          <Image
            src={variant === "white" ? "/images/Logo-white.png" : variant === "blue" ? "/images/Logo-blue.png" : "/images/Logo-red.png"}
            alt="Logo"
            width={122}
            height={27}
            className="h-8 w-auto"
          />
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
                <li className="relative group ">
                  <div className=" relative z-[3]">
                    <a
                      href=""
                      className=" px-4 py-1.5 rounded-full text-white font-futura-pt text-sm border  border-white bg-transparent cursor-pointer"
                    >
                      {hash === "runner" ? "Runner" : hash === "vendor" ? "Vendor" : "Customer"}
                    </a>
                    <FaChevronDown size={16} className="inline ml-2 text-white" />
                  </div>
                  <div className=" absolute top-0 left-0 pt-14 w-full group-hover:block hidden z-[2]">
                    <ul className=" flex flex-col gap-2">
                      <li className="">
                        <a
                          href="#customer"
                          className={`${
                            hash === "customer" ? "border-white" : "border-transparent"
                          } px-4 py-1.5  rounded-full text-white font-futura-pt text-sm border hover:border-white bg-opacity-15 block text-center`}
                        >
                          Customer
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="#runner"
                          className={`${
                            hash === "runner" ? "border-white" : "border-transparent"
                          } px-4 py-1.5  rounded-full text-white font-futura-pt text-sm border hover:border-white bg-opacity-15 block text-center`}
                        >
                          Runner
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="#vendor"
                          className={`${
                            hash === "vendor" ? "border-white" : "border-transparent"
                          } px-4 py-1.5  rounded-full text-white font-futura-pt text-sm border hover:border-white bg-opacity-15 block text-center`}
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
            <Image
              src={variant === "white" ? "/images/Logo-white-mobile.png" : "/images/Logo-red-mobile.png"}
              alt="Logo"
              width={41}
              height={37}
              className=""
            />
          </div>
          <div className="flex gap-4 items-center">
            <MenuIcon onClick={() => setShowMobileMenu(true)} className="h-10 w-10 text-white" />
            <DownloadIcon className="h-10 w-10 text-white" />
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        color={hash == "runner" ? "red" : hash == "vendor" ? "black" : "blue"}
        hash={hash}
      />
    </>
  );
};

export default Header;
