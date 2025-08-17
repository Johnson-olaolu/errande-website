import { useAnimation, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";

const Benefits = () => {
  const controls = useAnimation();
  const [currentBenefits, setCurrentBenefits] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const benefitItems = [
    {
      id: 1,
      title: "Withdraw straight to your account",
      text: "Erande gives you the most efficient service that no one has ever seen. We have compiled information and analysis that helps us better the services we render.",
      image: "/images/Runner-benefit1.png",
      link: "#",
    },
    {
      id: 2,
      title: "Track your earnings",
      text: "Stay on top of your finances with a clear, real-time view of your earnings. Our dashboard provides detailed reports and analytics to help you understand and grow your income.",
      image: "/images/Runner-benefit2.png",
      link: "#",
    },
    {
      id: 3,
      title: "Get orders near your location asap.",
      text: "Get a constant flow of delivery opportunities from local businesses. Our app alerts you to the closest jobs, so you can spend less time waiting and more time earning.",
      image: "/images/Runner-benefit3.png",
      link: "#",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    controls.start({
      x: -currentBenefits * containerRef.current.clientWidth,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [currentBenefits, controls]);

  useEffect(() => {
    function nextComponent() {
      setCurrentBenefits((prev) => (prev + 1) % benefitItems.length);
    }
    const interval = setInterval(nextComponent, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="  relative px-8 lg:px-28 overflow-hidden">
      {/* <div className=" px-8 lg:px-52 ">
        <div className="h-px bg-erande-black w-full"></div>
      </div> */}
      <div ref={containerRef} className=" w-full overflow-hidden relative">
        <motion.div className="flex w-full items-start" initial={{ x: 0 }} animate={controls}>
          {benefitItems.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col-reverse lg:flex-row justify-between items-center py-10 lg:py-32 relative z-10 shrink-0 w-full p-1 gap-10 lg:gap-0"
            >
              <div className="">
                <div className=" mb-5 lg:mb-12 lg:w-[432px] w-full text-center lg:text-left">
                  <h6 className="capitalize font-antipasto-pro text-2xl lg:text-4xl text-erande-black font-bold">{item.title}</h6>
                  <p className=" text-erande-black text-xs lg:text-xl font-antipasto-pro capitalize">{item.text}</p>
                </div>
                <div className=" flex items-center  gap-3 justify-center lg:justify-start">
                  <Link
                    href=""
                    className=" capitalize flex items-center text-sm py-1 lg:py-2 px-3 lg:px-5 rounded-full border-erande-black border-2 text-erande-black font-futura-pt lg:text-lg  hover:bg-erande-black hover:text-white transition-colors duration-300"
                  >
                    <BiLogoPlayStore />
                  </Link>
                  <Link
                    href=""
                    className=" capitalize flex items-center text-sm py-1 lg:py-2 px-3 lg:px-5 rounded-full border-erande-black border-2 text-erande-black font-futura-pt lg:text-lg  hover:bg-erande-black hover:text-white transition-colors duration-300"
                  >
                    <BiLogoApple />
                  </Link>
                </div>
              </div>
              <Image src={item.image} alt="Vendor Benefit" height={498} width={702} className="w-auto h-[340px] lg:h-auto lg:w-[702px]" />
            </div>
          ))}
        </motion.div>
        <div className="flex items-center gap-3  justify-center lg:justify-start lg:absolute left-0 bottom-80">
          {benefitItems.map((_, i) => (
            <button
              key={i}
              className={`w-12 lg:w-16 h-1.5 lg:h-2.5 rounded-full cursor-pointer ${i === currentBenefits ? "bg-erande-black" : "bg-gray-300"}`}
              onClick={() => setCurrentBenefits(i)}
            ></button>
          ))}
        </div>
      </div>

      <Image src="/icons/star-line.svg" alt="Star line" height={42} width={1080} className="absolute lg:bottom-20  -right-20 lg:right-8 h-11" />
      <Image
        src="/icons/star-line.svg"
        alt="Star line"
        height={42}
        width={1080}
        className="absolute top-0 lg:top-20 -left-56 transform -scale-x-100 h-11"
      />
      {/* <div className=" px-8 lg:px-52 ">
        <div className="h-px bg-erande-black w-full"></div>
      </div> */}
    </section>
  );
};

export default Benefits;
