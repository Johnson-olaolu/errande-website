import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation, Variants } from "motion/react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { FaChevronRight } from "react-icons/fa6";

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(0); // Loop back to the first step
    }
  };

  const steps = [
    { id: 1, title: "Step 1", component: <Step1 /> },
    { id: 2, title: "Step 2", component: <Step2 /> },
    { id: 3, title: "Step 3", component: <Step3 /> },
  ];

  const fadeVariants: Variants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const nextComponent = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  useEffect(() => {
    const interval = setInterval(nextComponent, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" -mt-[200px]">
      <div className="px-8 lg:px-28">
        <div className="w-full relative overflow-hidden transform translate-y-1/2 ">
          <motion.div
            className="overflow-hidden"
            layout
            transition={{
              layout: {
                duration: 0,
                ease: "easeInOut",
              },
            }}
          >
            <AnimatePresence mode="popLayout">
              <motion.div key={currentStep} variants={fadeVariants} initial="initial" animate="animate" exit="exit" layout>
                {steps[currentStep].component}
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <div className="absolute left-0 w-full bottom-12 lg:bottom-48 px-8 lg:px-44">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 lg:gap-2">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id - 1)}
                    className={
                      "w-12 lg:w-24 h-1.5 lg:h-3 rounded-full cursor-pointer " +
                      (currentStep === step.id - 1 ? (step.id === 3 ? "bg-erande-black" : "bg-white") : "bg-opacity-15")
                    }
                  ></button>
                ))}
              </div>
              <button
                onClick={nextStep}
                className={
                  "p-3 lg:p-6 text-sm lg:text-xl rounded-full border cursor-pointer " +
                  (currentStep === 2
                    ? " hover:text-white text-black border-erande-black hover:bg-erande-black"
                    : currentStep === 0
                    ? " hover:text-erande-red border-white hover:bg-white text-white"
                    : " border-white hover:bg-white text-white hover:text-erande-black") +
                  " transition-colors duration-300"
                }
              >
                <FaChevronRight className="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[530px] bg-erande-blue"></div>
    </section>
  );
};

export default Steps;
