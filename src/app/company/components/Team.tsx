import TeamMemberCard from "@/components /TeamMemberCard";
import React from "react";

const Team = () => {
  const teamMembersInfo = [
    {
      name: "Stanley Inyang",
      position: "CEO",
      image: "/images/stanley-inyang.png",
      description:
        "Is a seasoned marketing and startup leader with over 8 years of experience in branding, PR, advertising, and digital growth strategies. He has helped build startups and worked with fintech brands for over three years, combining marketing expertise with product and user journey knowledge. Stanley has led campaigns for top brands like Wakanow, Mentos, First Bank, and MainOne, and holds certifications in digital strategy and brand communication. He brings a trusted media network across TV, radio, and print, with strong capabilities in B2B/B2C sales funnels and performance-driven marketing. Now focused on scaling impact, he helps businesses optimize marketing spend, drive growth, and expand across African markets.",
      variant: "large",
    },
    {
      name: "Patrick JwanShak",
      image: "/images/patrick-jwanshak.png",
      position: "COO",
      description: "A trained pilot and logistics expert ensuring operational  precision and delivery excellence.",
    },
    {
      name: "Ifeoma Nweje",
      image: "/images/ifeoma-nweje.png",
      position: "CFO",
      description: "A financial powerhouse with a track record in building sustainable,  scalable revenue systems.",
    },
    {
      name: "Kazeem Asiwaju-Bello",
      image: "/images/kazeem-asiwaju.png",
      position: "Head of Tech",
      description:
        "Is a seasoned Enterprise & Cloud Architect with 7+ years building scalable platforms across fintech, SaaS, and logistics. He leads API-first, cloud-native architecture and drives DevSecOps, automation, and engineering excellence. His expertise spans backend, frontend, and cloud, aligning tech with business growth.",
    },
    {
      name: "Alexander Olafare",
      image: "/images/alexander-olafare.png",
      position: "Head of Growth",
      description:
        "A digital growth leader with 13 years of experience driving e-commerce success, scaling paid media, and leading CRM and international expansion for startups and high-growth teams.",
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
