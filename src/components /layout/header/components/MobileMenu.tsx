import { routes } from "@/app/routes";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface MobileMenuProps {
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
  color: "blue" | "red" | "black";
  hash: string;
  variant?: "blue" | "red" | "white";
}
const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  const { showMobileMenu, setShowMobileMenu } = props;
  const [showDropdown, setShowDropdown] = useState(false);

  const closeMenu = () => {
    setShowMobileMenu(false);
    setShowDropdown(false);
  };
  return (
    <AnimatePresence>
      {showMobileMenu && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={
            " fixed h-screen w-screen inset-0 z-50" +
            (props.color === "red" ? " bg-erande-red" : props.color === "black" ? " bg-erande-black" : " bg-erande-blue")
          }
        >
          <div className="py-28 px-8">
            <button onClick={() => closeMenu()} className="absolute top-11 right-8">
              <IoIosCloseCircleOutline size={28} className="text-white" />
            </button>
            <div className=" rounded-2xl border border-white px-2">
              <ul className="divide-white divide-y">
                <li className=" p-4">
                  <Link onClick={() => closeMenu()} href={routes.COMPANY} className="text-white font-futura-pt text-lg block">
                    Company
                  </Link>
                </li>
                <li className=" p-4">
                  <Link onClick={() => closeMenu()} href={routes.SERVICES} className="text-white font-futura-pt text-lg block">
                    Services
                  </Link>
                </li>
                <li className=" p-4">
                  <Link onClick={() => closeMenu()} href={routes.EXPLORE} className="text-white font-futura-pt text-lg block">
                    Explore
                  </Link>
                </li>
                <li className=" p-4">
                  <Link onClick={() => closeMenu()} href={routes.LEGAL} className="text-white font-futura-pt text-lg block">
                    Legal
                  </Link>
                </li>
                <li className=" p-4">
                  <Link onClick={() => closeMenu()} href={routes.CONTACT} className="text-white font-futura-pt text-lg block">
                    Contact
                  </Link>
                </li>
                <li className=" group">
                  <div className=" flex items-center justify-between p-4">
                    <a
                      href={props.hash === "customer" || !props.hash ? routes.CUSTOMER : props.hash === "runner" ? routes.RUNNER : routes.VENDOR}
                      className={"text-white font-futura-pt text-lg opacity-50" + (props.variant !== "blue" ? " opacity-50" : " opacity-100")}
                    >
                      {props.hash === "customer" || !props.hash ? "Customer" : props.hash === "runner" ? "Runner" : "Vendor"}
                    </a>
                    <FaChevronDown onClick={() => setShowDropdown(!showDropdown)} size={16} className="inline ml-2 text-white" />
                  </div>
                  {showDropdown && (
                    <ul>
                      <li className="p-4">
                        <a
                          href={routes.CUSTOMER}
                          onClick={() => closeMenu()}
                          className={"text-white font-futura-pt text-lg " + (props.hash === "customer" || !props.hash ? "opacity-50" : "opacity-100")}
                        >
                          Customer
                        </a>
                      </li>

                      <li className="p-4">
                        <a
                          href={routes.RUNNER}
                          onClick={() => closeMenu()}
                          className={"text-white font-futura-pt text-lg " + (props.hash === "runner" ? "opacity-50" : "opacity-100")}
                        >
                          Runner
                        </a>
                      </li>
                      <li className="p-4">
                        <a
                          href={routes.VENDOR}
                          onClick={() => closeMenu()}
                          className={"text-white font-futura-pt text-lg " + (props.hash === "vendor" ? "opacity-50" : "opacity-100")}
                        >
                          Vendor
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <a href="#" className=" text-white font-futura-pt text-lg rounded-2xl border border-white p-6 mt-9 block">
              Download App
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
