import React from "react";
import Jumbotron from "./components/Jumbotron";
import Services from "./components/Services";
import Locations from "./components/Locations";

interface CustomerPageProps {
  nextSection: () => void;
}
const CustomerPage = (props: CustomerPageProps) => {
  const { nextSection } = props;
  return (
    <main className="">
      <Jumbotron nextSection={nextSection} />
      <Services />
      <Locations />
    </main>
  );
};

export default CustomerPage;
