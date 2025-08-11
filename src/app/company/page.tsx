import React from "react";
import BriefInfo from "./components/BriefInfo";
import Building from "./components/Building";
import Mission from "./components/Mission";
import Focus from "./components/Focus";
import Team from "./components/Team";
import SubscribeSection from "@/components /SubscribeSection";

const CompanyPage = () => {
  return (
    <main>
      <BriefInfo />
      <Building />
      <Mission />
      <Focus />
      <Team />
      <SubscribeSection />
    </main>
  );
};

export default CompanyPage;
