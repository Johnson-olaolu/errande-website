import TeamMemberCard from "@/components /TeamMemberCard";
import React from "react";

const Team = () => {
  return (
    <section className="px-24 py-48 bg-white">
      <div className="text-erande-blue w-full ">
        <h2 className=" text-4xl font-antipasto-pro capitalize ">Meet the Team</h2>
        <p className=" mt-2 texterande-blue text-xl font-futura-pt">
          The Erande founding team brings together expertise in technology, logistics, finance, and user experience:
        </p>
      </div>
      <div className=" mt-20 grid grid-cols-3 gap-10">
        {[...Array(6)].map((_, index) => (
          <TeamMemberCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default Team;
