import React from "react";
import Jumbotron from "./components/Jumbotron";

interface RunnerPageProps {
  nextSection: () => void;
}
const RunnerPage: React.FC<RunnerPageProps> = ({ nextSection }) => {
  return (
    <main className="bg-white">
      <Jumbotron nextSection={nextSection} />
    </main>
  );
};

export default RunnerPage;
