import { routes } from "@/app/routes";
import { useAnimation, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";

interface ExploreSectionProps {
  variant?: "blue" | "red" | "black";
}
const ExploreSection = (props: ExploreSectionProps) => {
  const { variant = "blue" } = props;
  const exploreItems = [
    {
      id: 1,
      title: "Send errands",
      description: "Clean, shop, and wash your clothes from the comfort of your home.",
      image: "/images/Explore1.png",
      link: routes.EXPLORE,
    },
    {
      id: 2,
      title: "Send errands",
      description: "Clean, shop, and wash your clothes from the comfort of your home.",
      image: "/images/Explore2.png",
      link: routes.EXPLORE,
    },
    {
      id: 3,
      title: "Send errands",
      description: "Clean, shop, and wash your clothes from the comfort of your home.",
      image: "/images/Explore3.png",
      link: routes.EXPLORE,
    },
  ];
  const controls = useAnimation();
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const nextStep = () => {
    if (currentSection < exploreItems.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      setCurrentSection(0); // Loop back to the first step
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    controls.start({
      x: -currentSection * containerRef.current.clientWidth,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [currentSection, controls]);

  return (
    <div className="px-8 lg:px-28 pb-24">
      <div className={" " + (variant === "blue" ? "text-erande-blue" : variant === "red" ? "text-erande-red" : "text-erande-black")}>
        <h5 className={"font-antipasto-pro text-3xl lg:text-4xl mb-2 font-bold capitalize"}>Explore Erande</h5>
        <p className="font-futura-pt text-sm lg:text-xl">
          Choose your starting point and get hands-on. Whether it&apos;s signing up, downloading an app.
        </p>
      </div>
      <div className="hidden lg:block mt-24">
        <div className="flex justify-between items-center w-full gap-10">
          {exploreItems.map((item, index) => (
            <div key={index} className="relative">
              <Image src={item.image} alt="Explore Background" className="h-[860px] w-auto" width={410} height={860} />
              <div className=" px-11 absolute left-0 bottom-16">
                <div className="text-white">
                  <h6 className=" font-antipasto-pro text-xl lg:text-5xl mb-2 font-bold capitalize">{item.title}</h6>
                  <p className=" font-futura-pt text-sm lg:text-xl font-medium">{item.description}</p>
                </div>
                <a href={item.link} className=" mt-20 inline-flex items-center gap-2.5 py-4 px-8 rounded-full bg-white text-erande-black">
                  <span className="font-antipasto-pro capitalize font-medium">Explore more</span>
                  <FaChevronRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden mt-7">
        <div ref={containerRef} className="w-full relative overflow-hidden">
          <motion.div className="flex w-full" initial={{ x: 0 }} animate={controls}>
            {exploreItems.map((item, index) => (
              <div key={index} className="relative shrink-0 w-full">
                <Image src={item.image} alt="Explore Background" className="h-auto w-full" width={410} height={860} />
                <div className=" px-5 absolute left-0 bottom-6">
                  <div className="text-white">
                    <h6 className=" font-antipasto-pro text-2xl font-bold capitalize">{item.title}</h6>
                    <p className=" font-futura-pt text-xs pr-16">{item.description}</p>
                  </div>
                  <a href={item.link} className=" mt-5 inline-flex items-center gap-2.5 py-3 px-5 rounded-full bg-white text-erande-black">
                    <span className="font-antipasto-pro capitalize font-medium text-xs">Explore more</span>
                    <FaChevronRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className=" mt-10 flex justify-between items-center">
          <div className=" flex items-center gap-1.5">
            {exploreItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={
                  "w-12 h-2 rounded-full  cursor-pointer " +
                  (currentSection === index
                    ? variant == "blue"
                      ? "bg-erande-blue"
                      : variant === "red"
                      ? "bg-erande-red"
                      : " bg-erande-black"
                    : variant === "blue"
                    ? "border-erande-blue border "
                    : variant === "red"
                    ? "border-erande-red border"
                    : "border-erande-black border")
                }
              ></button>
            ))}
          </div>
          <button
            className={
              "border rounded-full p-3 " +
              (variant === "blue"
                ? " text-erande-blue border-erande-blue"
                : variant === "red"
                ? " text-erande-red border-erande-red"
                : " text-erande-black border-erande-black")
            }
            onClick={() => nextStep()}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
