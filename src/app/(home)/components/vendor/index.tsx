import React from "react";
import Jumbotron from "./components/Jumbotron";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import ExploreSection from "@/components /ExploreSection";
import SubscribeSection from "@/components /SubscribeSection";

interface VendorPageProps {
  nextSection: () => void;
}
const VendorPage: React.FC<VendorPageProps> = ({ nextSection }) => {
  return (
    <main className="">
      <Jumbotron nextSection={nextSection} />
      <Services />
      <Benefits />
      <FAQ />
      <ExploreSection variant="black" />
      <SubscribeSection />
    </main>
  );
};

export default VendorPage;
