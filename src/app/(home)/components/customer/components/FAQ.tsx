import FAQSection from "@/components /FAQSection";
import { faqQuestionAnswersCustomer } from "@/utils/constants";
import React from "react";

const FAQ = () => {
  return (
    <section className="-mb-64 lg:-mb-96">
      <div className="bg-erande-blue h-[520px] px-8 lg:px-28"></div>
      <div className="px-8 lg:px-28 transform -translate-y-7/12 ">
        <FAQSection faqs={faqQuestionAnswersCustomer} />
      </div>
    </section>
  );
};

export default FAQ;
