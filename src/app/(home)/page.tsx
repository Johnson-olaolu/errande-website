"use client";

import { motion, useAnimation } from "motion/react";
import { useState, useEffect } from "react";
import CustomerPage from "./components/customer";
import RiderPage from "./components/rider";
import ShopPage from "./components/shop";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const controls = useAnimation();

  const sections = [{ component: <ShopPage /> }, { component: <RiderPage /> }, { component: <CustomerPage /> }];

  useEffect(() => {
    controls.start({
      x: -currentSection * window.innerWidth,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [currentSection, controls]);

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
  };

  return (
    <div className="relative w-screen overflow-hidden">
      {/* Container for all sections */}
      <motion.div className="flex " animate={controls} style={{ width: `${sections.length * 100}vw` }}>
        {sections.map((section, index) => (
          <motion.div key={index} className={`w-screen `} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {section.component}
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation arrows */}
      <button
        onClick={prevSection}
        disabled={currentSection === 0}
        className={`absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-4xl transition-opacity duration-300 ${
          currentSection === 0 ? "opacity-30" : "opacity-70 hover:opacity-100"
        }`}
      >
        ‹
      </button>

      <button
        onClick={nextSection}
        disabled={currentSection === sections.length - 1}
        className={`absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-4xl transition-opacity duration-300 ${
          currentSection === sections.length - 1 ? "opacity-30" : "opacity-70 hover:opacity-100"
        }`}
      >
        ›
      </button>
    </div>
  );
}
