import ShopIcon from "@/assets/icons/ShopIcon";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { FaChevronRight } from "react-icons/fa6";

interface JumbotronProps {
  nextSection: () => void;
}
const Jumbotron: React.FC<JumbotronProps> = ({ nextSection }) => {
  return (
    <div className="">
      <div className=" pb-[200px] overflow-x-hidden">
        <div className="bg-erande-blue pt-28 lg:pt-52 px-5 lg:px-24 h-[594px] lg:h-[800px] relative z-0">
          <div className="z-[1]">
            <div className=" flex items-center justify-center gap-2.5 lg:gap-5 mb-9 lg:mb-3">
              <a href="" className="">
                <Image className="h-8 lg:h-14 w-11 lg:w-20" src="/icons/play-store.svg" alt="Play Store" width={80} height={52} />
              </a>
              <a href="" className="">
                <Image className="h-8 lg:h-14 w-11 lg:w-20" src="/icons/apple-store.svg" alt="Apple Store" width={80} height={52} />
              </a>
            </div>
            <div className=" flex flex-col lg:flex-row justify-between gap-2.5 items-center lg:items-start">
              <div className=" max-w-[330px] lg:max-w-[456px] w-full text-center lg:text-left">
                <p className=" capitalize text-2xl lg:text-4xl font-antipasto-pro text-white">Fast, reliable errand and delivery services.</p>
              </div>
              <div className="max-w-[330px] lg:max-w-[278px] w-full text-center lg:text-right">
                <p className=" capitalize text-sm lg:text-lg font-antipasto-pro text-white">
                  We deliver rapid, dependable errand and delivery solutions — getting your tasks done efficiently and right on time.
                </p>
              </div>
            </div>
          </div>
          <div className=" absolute top-[300px] left-1/2 transform -translate-x-1/2 z-[0]">
            <p className="uppercase font-brigands-expanded text-[108px] lg:text-[280px] text-opacity-15">ERANDE</p>
          </div>
          <div className="h-[442px] lg:h-[690px] w-[442px] lg:w-[690px] rounded-full bg-erande-darkblue-jumbotron absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[180px] lg:translate-y-[200px] z-[1]">
            <Image
              src="/images/cleaner.png"
              alt="cleaner"
              className=" absolute -top-3 left-1/2 transform -translate-x-1/2 h-[340px] lg:h-[534px] "
              height={534}
              width={731}
            />
            <div className="absolute bottom-10 lg:bottom-14 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
              <button className=" h-1.5 lg:h-2.5 w-1.5 lg:w-2.5 rounded-full bg-white opacity-20"></button>
              <button className=" h-3 lg:h-5 w-3 lg:w-5 rounded-full bg-white opacity-50"></button>
              <button className=" h-6 lg:h-8 w-6 lg:w-8 rounded-full bg-white"></button>
              <button className=" h-3 lg:h-5 w-3 lg:w-5 rounded-full bg-white opacity-50"></button>
              <button className=" h-1.5 lg:h-2.5 w-1.5 lg:w-2.5 rounded-full bg-white opacity-20"></button>
            </div>
          </div>
          <div className="absolute w-screen h-20 lg:h-36 bg-[#E03826] bottom-0 left-0 transform translate-y-full lg:translate-y-1/2 z-[2] flex items-center overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              }}
            >
              <div className="flex items-center gap-20">
                <span className=" text-2xl lg:text-5xl font-brigands-expanded uppercase text-[#FFBB00] ml-20">Errands</span>
                <ShopIcon className="text-[#FFBB00] h-8 w-8 lg:h-[60px] lg:w-[60px]" />
                <span className=" text-2xl lg:text-5xl font-brigands-expanded uppercase text-[#FFBB00]">Deliveries</span>
                <ShopIcon className="text-[#FFBB00] h-8 w-8 lg:h-[60px] lg:w-[60px]" />
                <span className=" text-2xl lg:text-5xl font-brigands-expanded uppercase text-[#FFBB00]">Services</span>
                <ShopIcon className="text-[#FFBB00] h-8 w-8 lg:h-[60px] lg:w-[60px]" />
              </div>
              <div className="flex items-center gap-20">
                <span className=" text-2xl lg:text-5xl font-brigands-expanded uppercase text-[#FFBB00] ml-20">Errands</span>
                <ShopIcon className="text-[#FFBB00] h-8 w-8 lg:h-[60px] lg:w-[60px]" />
                <span className=" text-2xl lg:text-5xl font-brigands-expanded uppercase text-[#FFBB00]">Deliveries</span>
                <ShopIcon className="text-[#FFBB00] h-8 w-8 lg:h-[60px] lg:w-[60px]" />
                <span className=" text-2xl lg:text-5xl font-brigands-expanded uppercase text-[#FFBB00]">Services</span>
                <ShopIcon className="text-[#FFBB00] h-8 w-8 lg:h-[60px] lg:w-[60px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center lg:mt-12 gap-3">
        <div className="px-5 lg:px-8 py-3 lg:py-5 bg-erande-blue rounded-full text-white font-antipasto-pro text-base lg:text-2xl">Customers</div>
        <button onClick={() => nextSection()} className="p-3 lg:p-5 border-2 border-erande-blue rounded-full cursor-pointer ">
          <FaChevronRight size={16} className=" text-erande-blue" />
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
