import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface MobileMenuProps {
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
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
          className=" fixed h-screen w-screen inset-0 bg-blue-500 z-50"
        >
          <div className="py-28 px-8">
            <button onClick={() => setShowMobileMenu(false)} className="absolute top-11 right-8">
              <IoIosCloseCircleOutline size={28} className="text-white" />
            </button>
            <div className=" rounded-2xl border border-white px-2">
              <ul className="divide-white divide-y">
                <li className=" p-4">
                  <a href="#" className="text-white font-futura-pt text-lg">
                    Company
                  </a>
                </li>
                <li className=" p-4">
                  <a href="#" className="text-white font-futura-pt text-lg">
                    Services
                  </a>
                </li>
                <li className=" p-4">
                  <a href="#" className="text-white font-futura-pt text-lg">
                    Explore
                  </a>
                </li>
                <li className=" p-4">
                  <a href="#" className="text-white font-futura-pt text-lg">
                    Legal
                  </a>
                </li>
                <li className=" p-4">
                  <a href="#" className="text-white font-futura-pt text-lg">
                    Contact
                  </a>
                </li>
                <li className=" group">
                  <div className=" flex items-center justify-between p-4">
                    <a href="#" className="text-white font-futura-pt text-lg opacity-50">
                      Customer
                    </a>
                    <FaChevronDown size={16} className="inline ml-2 text-white" />
                  </div>
                  <ul>
                    <li className="p-4">
                      <a href="#" className="text-white font-futura-pt text-lg ">
                        Runner
                      </a>
                    </li>
                    <li className="p-4">
                      <a href="#" className="text-white font-futura-pt text-lg ">
                        Vendor
                      </a>
                    </li>
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
