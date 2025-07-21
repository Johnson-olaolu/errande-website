"use client";

import { motion, useAnimation } from "motion/react";
import { useState, useEffect } from "react";
import CustomerPage from "./components/customer";
import RunnerPage from "./components/runner";
import VendorPage from "./components/vendor";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const controls = useAnimation();

  const getSectionFromHash = (hash: string) => {
    const sectionIndex = sections.findIndex((section) => section.hash === hash);
    return sectionIndex !== -1 ? sectionIndex : 0;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const sectionIndex = getSectionFromHash(hash);
        setCurrentSection(sectionIndex);
      }
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const sectionIndex = getSectionFromHash(hash);
        setCurrentSection(sectionIndex);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    controls.start({
      x: -currentSection * window.innerWidth,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [currentSection, controls]);

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      const newSection = currentSection + 1;
      setCurrentSection(newSection);
      window.location.hash = sections[newSection].hash;
    } else {
      window.location.hash = sections[0].hash; // Loop back to the first section
      setCurrentSection(0);
    }
  };

  const sections = [
    { component: <CustomerPage nextSection={nextSection} />, hash: "customer" },
    { component: <RunnerPage nextSection={nextSection} />, hash: "runner" },
    { component: <VendorPage nextSection={nextSection} />, hash: "vendor" },
  ];

  return (
    <div className="relative w-screen overflow-hidden">
      <motion.div className="flex " animate={controls} style={{ width: `${sections.length * 100}vw` }}>
        {sections.map((section, index) => (
          <motion.div key={index} className={`w-screen `} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {section.component}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
