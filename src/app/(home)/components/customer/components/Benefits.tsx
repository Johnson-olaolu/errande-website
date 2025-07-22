import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Benefits = () => {
  return (
    <section className=" bg-erande-blue">
      <div className="px-8 lg:px-28 ">
        <h5 className="font-antipasto-pro text-xl lg:text-4xl mb-2 font-bold capitalize">Rest assured, we&apos;ve got you</h5>
        <p className="font-futura-pt text-sm lg:text-xl">
          Erande gives you the most efficient service that no one has ever seen. We have compiled information and analysis that helps us better the
          services we render.
        </p>
      </div>
      <div className=" h-[460px] lg:h-[970px] relative ">
        <div className=" absolute top-[68px] left-1/2 transform -translate-x-1/2 z-[0]">
          <p className="uppercase font-brigands-expanded text-[108px] lg:text-[280px] text-opacity-15">ERANDE</p>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 ">
          <motion.div
            className="flex"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex gap-4 lg:gap-11 items-start shrink-0">
                <Image
                  src={"/images/Benefits1.png"}
                  alt="Description of image"
                  width={358}
                  height={450}
                  className="shrink-0 transform translate-y-1/4 ml-4 lg:ml-11 lg:h-[450px] w-auto h-40"
                />
                <div className=" w-[156px] lg:w-[360px] h-[156px] lg:h-[360px] bg-white rounded-4xl lg:rounded-[80px] py-12 lg:py-28 px-2 lg:px-5 text-center shrink-0 transform">
                  <p className="capitalize font-antipasto-pro font-bold text-erande-black text-sm lg:text-3xl mb-2">Send errands </p>
                  <p className=" font-futura-pt text-erande-black text-[8px] lg:text-lg">
                    Clean, shop, and wash your clothes from the comfort of your home.
                  </p>
                </div>
                <Image
                  src={"/images/Benefits2.png"}
                  alt="Description of image"
                  width={358}
                  height={450}
                  className="shrink-0 transform lg:h-[450px] w-auto h-40"
                />
                <div className=" w-[156px] lg:w-[360px] h-[156px] lg:h-[360px] bg-white rounded-4xl lg:rounded-[80px] py-12 lg:py-28 px-2 lg:px-5 text-center shrink-0 transform translate-y-1/2">
                  <p className="capitalize font-antipasto-pro font-bold text-erande-black text-sm lg:text-3xl mb-2">Affordable prices </p>
                  <p className=" font-futura-pt text-erande-black text-[8px] lg:text-lg">
                    With zero extra fees and affordable meal, erande got you covered.{" "}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
