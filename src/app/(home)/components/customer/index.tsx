import React from "react";
import Jumbotron from "./components/Jumbotron";
import Services from "./components/Services";
import Locations from "./components/Locations";
import Steps from "./components/steps";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import ExploreSection from "@/components /ExploreSection";
import SubscribeSection from "@/components /SubscribeSection";

interface CustomerPageProps {
  nextSection: () => void;
}
const CustomerPage = (props: CustomerPageProps) => {
  const { nextSection } = props;
  return (
    <main className="bg-white">
      <Jumbotron nextSection={nextSection} />
      <Services />
      <Locations />
      <Steps />
      <Benefits />
      <FAQ />
      <ExploreSection />
      <SubscribeSection />
    </main>
  );
};

export default CustomerPage;
