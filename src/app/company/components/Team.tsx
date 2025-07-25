import TeamMemberCard from "@/components /TeamMemberCard";
import React from "react";

const Team = () => {
  return (
    <section className="px-5 lg:px-24 py-20 lg:py-48 bg-white">
      <div className="text-erande-blue w-full ">
        <h2 className=" text-3xl lg:text-4xl font-antipasto-pro capitalize ">Meet the Team</h2>
        <p className=" mt-2 text-xs lg:text-xl font-futura-pt">
          The Erande founding team brings together expertise in technology, logistics, finance, and user experience:
        </p>
      </div>
      <div className="mt-14 lg:mt-20 grid lg:grid-cols-3 gap-10">
        {[...Array(6)].map((_, index) => (
          <TeamMemberCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default Team;
