"use client";

import { motion, AnimatePresence, Variants } from "motion/react";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import CustomerPage from "./components/customer";
import RunnerPage from "./components/runner";
import VendorPage from "./components/vendor";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = useCallback(() => {
    if (currentSection < sections.length - 1) {
      const newSection = currentSection + 1;
      setCurrentSection(newSection);
      window.location.hash = sections[newSection].hash;
    } else {
      window.location.hash = sections[0].hash; // Loop back to the first section
      setCurrentSection(0);
    }
  }, [currentSection]);

  const sections = useMemo(
    () => [
      {
        component: <CustomerPage nextSection={nextSection} />,
        hash: "customer",
      },
      { component: <RunnerPage nextSection={nextSection} />, hash: "runner" },
      { component: <VendorPage nextSection={nextSection} />, hash: "vendor" },
    ],
    [nextSection]
  );

  const getSectionFromHash = useCallback(
    (hash: string) => {
      const sectionIndex = sections.findIndex((section) => section.hash === hash);
      return sectionIndex !== -1 ? sectionIndex : 0;
    },
    [sections]
  );

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
  }, [getSectionFromHash]);

  const fadeVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="w-screen">
      <motion.div
        className="overflow-hidden"
        layout
        transition={{
          layout: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div key={currentSection} variants={fadeVariants} initial="initial" animate="animate" exit="exit" layout>
            {sections[currentSection].component}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
