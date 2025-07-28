import React from "react";
import Jumbotron from "./components/Jumbotron";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import ExploreSection from "@/components /ExploreSection";
import SubscribeSection from "@/components /SubscribeSection";

interface RunnerPageProps {
  nextSection: () => void;
}
const RunnerPage: React.FC<RunnerPageProps> = ({ nextSection }) => {
  return (
    <main className="bg-white">
      <Jumbotron nextSection={nextSection} />
      <Services />
      <Benefits />
      <FAQ />
      <ExploreSection variant="black" />
      <SubscribeSection />
    </main>
  );
};

export default RunnerPage;
