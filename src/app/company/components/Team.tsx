import TeamMemberCard from "@/components /TeamMemberCard";
import React from "react";

const Team = () => {
  const teamMembersInfo = [
    {
      name: "Stanley Inyang",
      position: "CEO",
      description: "A marketing and tech strategist with over 10 years leading digital innovation and startup growth.",
    },
    {
      name: "Patrick JwanShak",
      position: "COO",
      description: "A trained pilot and logistics expert ensuring operational  precision and delivery excellence.",
    },
    {
      name: "Ifeoma",
      position: "CFO",
      description: "A financial powerhouse with a track record in building sustainable,  scalable revenue systems.",
    },
    {
      name: "Marvelous Eniobong",
      position: "Head of Product",
      description: "A marketing and tech strategist with over 10 years leading  digital innovation and startup growth.",
    },
    {
      name: "Kazeem Asiwaju",
      position: "Head of Tech",
      description: "A trained pilot and logistics expert ensuring operational  precision and delivery excellence.",
    },
    {
      name: "Okon Akpan",
      position: "Head of Growth",
      description: "A trained pilot and logistics expert ensuring operational  precision and delivery excellence.",
    },
  ];
  return (
    <section className="px-5 lg:px-24 py-20 lg:py-48 bg-white">
      <div className="text-erande-blue w-full ">
        <h2 className=" text-3xl lg:text-4xl font-antipasto-pro capitalize ">Meet the Team</h2>
        <p className=" mt-2 text-xs lg:text-xl font-futura-pt">
          The Erande founding team brings together expertise in technology, logistics, finance, and user experience:
        </p>
      </div>
      <div className="mt-14 lg:mt-20 grid lg:grid-cols-3 gap-10">
        {teamMembersInfo.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
