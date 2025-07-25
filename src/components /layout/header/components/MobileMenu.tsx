import { routes } from "@/app/routes";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface MobileMenuProps {
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
  color: "blue" | "red" | "black";
  hash: string;
}
const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  const { showMobileMenu, setShowMobileMenu } = props;
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
            <button onClick={() => setShowMobileMenu(false)} className="absolute top-11 right-8">
              <IoIosCloseCircleOutline size={28} className="text-white" />
            </button>
            <div className=" rounded-2xl border border-white px-2">
              <ul className="divide-white divide-y">
                <li className=" p-4">
                  <Link onClick={() => setShowMobileMenu(false)} href={routes.COMPANY} className="text-white font-futura-pt text-lg">
                    Company
                  </Link>
                </li>
                <li className=" p-4">
                  <Link onClick={() => setShowMobileMenu(false)} href={routes.SERVICES} className="text-white font-futura-pt text-lg">
                    Services
                  </Link>
                </li>
                <li className=" p-4">
                  <Link onClick={() => setShowMobileMenu(false)} href={routes.EXPLORE} className="text-white font-futura-pt text-lg">
                    Explore
                  </Link>
                </li>
                <li className=" p-4">
                  <Link onClick={() => setShowMobileMenu(false)} href={routes.LEGAL} className="text-white font-futura-pt text-lg">
                    Legal
                  </Link>
                </li>
                <li className=" p-4">
                  <Link onClick={() => setShowMobileMenu(false)} href={routes.CONTACT} className="text-white font-futura-pt text-lg">
                    Contact
                  </Link>
                </li>
                <li className=" group">
                  <div className=" flex items-center justify-between p-4">
                    <a href="#" className="text-white font-futura-pt text-lg opacity-50">
                      {props.hash === "customer" || !props.hash ? "Customer" : props.hash === "runner" ? "Runner" : "Vendor"}
                    </a>
                    <FaChevronDown size={16} className="inline ml-2 text-white" />
                  </div>
                  <ul>
                    {props.hash !== "customer" && !!props.hash && (
                      <li className="p-4">
                        <a href="#customer" onClick={() => setShowMobileMenu(false)} className="text-white font-futura-pt text-lg ">
                          Customer
                        </a>
                      </li>
                    )}

                    {props.hash !== "runner" && (
                      <li className="p-4">
                        <a href="#runner" onClick={() => setShowMobileMenu(false)} className="text-white font-futura-pt text-lg ">
                          Runner
                        </a>
                      </li>
                    )}
                    {props.hash !== "vendor" && (
                      <li className="p-4">
                        <a href="#vendor" onClick={() => setShowMobileMenu(false)} className="text-white font-futura-pt text-lg ">
                          Vendor
                        </a>
                      </li>
                    )}
                  </ul>
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
