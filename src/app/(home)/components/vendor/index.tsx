import React from "react";
import Jumbotron from "./components/Jumbotron";

interface VendorPageProps {
  nextSection: () => void;
}
const VendorPage: React.FC<VendorPageProps> = ({ nextSection }) => {
  return (
    <main className="bg-white">
      <Jumbotron nextSection={nextSection} />
    </main>
  );
};

export default VendorPage;
