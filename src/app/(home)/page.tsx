"use client";

import { motion, useAnimation } from "motion/react";
import { useState, useEffect, useCallback, useMemo, useRef, use } from "react";
import CustomerPage from "./components/customer";
import RunnerPage from "./components/runner";
import VendorPage from "./components/vendor";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

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

  useEffect(() => {
    controls.start({
      x: -currentSection * window.innerWidth,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [currentSection, controls]);

  useEffect(() => {
    console.log({
      height1: containerRef1.current?.clientHeight,
      height2: containerRef2.current?.clientHeight,
      height3: containerRef3.current?.clientHeight,
    });
  }, [currentSection, controls]);

  return (
    <div className="relative w-screen overflow-hidden bg-white">
      <motion.div
        className="flex items-start"
        animate={controls}
        style={{
          width: `${sections.length * 100}vw`,
          height: `${
            currentSection === 0
              ? containerRef1.current?.clientHeight
              : currentSection === 1
              ? containerRef2.current?.clientHeight
              : containerRef3.current?.clientHeight
          }px`,
        }}
      >
        {sections.map((section, index) => (
          <motion.div
            ref={index === 0 ? containerRef1 : index === 1 ? containerRef2 : containerRef3}
            key={index}
            className={`w-screen `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {section.component}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
