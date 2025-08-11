import React from "react";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import SubscribeSection from "@/components /SubscribeSection";

const ServicesPage = () => {
  return (
    <main>
      <Services />
      {/* <FAQ /> */}
      <SubscribeSection />
    </main>
  );
};

export default ServicesPage;
