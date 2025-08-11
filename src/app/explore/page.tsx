import SubscribeSection from "@/components /SubscribeSection";
import React from "react";
import FeaturedBlog from "./components/FeaturedBlog";
import FAQ from "./components/FAQ";
import Articles from "./components/articles";

const ExplorePage = () => {
  return (
    <main>
      <FeaturedBlog
        align="left"
        title="Simplifying Life Through Technology!"
        text="At Erande, we believe your time is precious. That’s why we’re building a platform that takes the stress out of everyday errands — from laundry and cleaning services, food delivery and groceries to pharmaceuticals, pickups, and more. Erande exists to give you the same peace of mind and support: dependable, thoughtful, and always on time."
        image="/images/FeaturedBlog1.png"
      />
      <Articles />
      <FeaturedBlog
        align="right"
        title="Your Time, Our Priority!"
        text="Experience the convenience of Erande, where we handle your errands with care and efficiency. From groceries to laundry, we’re here to make your life easier."
        image="/images/FeaturedBlog2.png"
      />
      {/* <FAQ /> */}
      <SubscribeSection />
    </main>
  );
};

export default ExplorePage;
