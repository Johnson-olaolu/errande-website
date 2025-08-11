import FAQSection from "@/components /FAQSection";
import { faqQuestionAnswersVendor } from "@/utils/constants";
import React from "react";

const FAQ = () => {
  return (
    <section className="mb-16 lg:mb-32">
      <div className="px-8 lg:px-28  ">
        <FAQSection faqs={faqQuestionAnswersVendor} variant="black" />
      </div>
    </section>
  );
};

export default FAQ;
