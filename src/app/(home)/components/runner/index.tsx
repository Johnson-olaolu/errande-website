import React from "react";
import Jumbotron from "./components/Jumbotron";
import Services from "./components/Services";

interface RunnerPageProps {
  nextSection: () => void;
}
const RunnerPage: React.FC<RunnerPageProps> = ({ nextSection }) => {
  return (
    <main className="">
      <Jumbotron nextSection={nextSection} />
      <Services />
    </main>
  );
};

export default RunnerPage;
