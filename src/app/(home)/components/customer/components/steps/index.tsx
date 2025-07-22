import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { FaChevronRight } from "react-icons/fa6";

const Steps = () => {
  const controls = useAnimation();
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!containerRef.current) return;
    console.log({ currentStep, containerWidth: containerRef.current.clientWidth });
    controls.start({
      x: -currentStep * containerRef.current.clientWidth,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [currentStep, controls]);

  return (
    <section className=" -mt-[200px]">
      <div className="px-8 lg:px-28">
        <div ref={containerRef} className="w-full relative overflow-hidden transform translate-y-1/2 ">
          <motion.div className="flex w-full" initial={{ x: 0 }} animate={controls}>
            {steps.map((step) => (
              <div key={step.id} className="w-full shrink-0">
                {step.component}
              </div>
            ))}
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
