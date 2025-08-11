import React from "react";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import SubscribeSection from "@/components /SubscribeSection";

const ContactUs = () => {
  return (
    <main>
      <ContactForm />
      {/* <FAQ /> */}
      <SubscribeSection />
    </main>
  );
};

export default ContactUs;
