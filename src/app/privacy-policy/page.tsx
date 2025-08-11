import React from "react";
import FAQ from "./components/FAQ";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SubscribeSection from "@/components /SubscribeSection";

const PrivacyPolicyPage = () => {
  return (
    <main>
      <PrivacyPolicy />
      {/* <FAQ /> */}
      <SubscribeSection />
    </main>
  );
};

export default PrivacyPolicyPage;
