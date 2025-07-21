import React from "react";
import Jumbotron from "./components/Jumbotron";

interface RunnerPageProps {
  nextSection: () => void;
}
const RunnerPage: React.FC<RunnerPageProps> = ({ nextSection }) => {
  return (
    <main className="">
      <Jumbotron nextSection={nextSection} />
    </main>
  );
};

export default RunnerPage;
