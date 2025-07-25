import React from "react";

const Mission = () => {
  const missionInfoItems = [
    {
      id: 1,
      title: "Care",
      description: "We serve with a heart-first mindset, treating every request with dignity and  attention.",
    },
    {
      id: 2,
      title: "Simplicity",
      description: "Life is complicated enough. Our job is to remove friction.",
    },
    {
      id: 3,
      title: "Community",
      description: "We build with and for the people we serve.",
    },
    {
      id: 4,
      title: "Innovation",
      description: "We embrace technology to stay ahead and deliver smarter, faster, and  better experiences.",
    },
  ];
  return (
    <section className=" bg-white pt-20 lg:py-40 lg:pl-24">
      <div className=" flex w-full items-center gap-20 lg:gap-28 flex-col lg:flex-row">
        <div className="text-erande-blue w-full lg:max-w-[378px] px-8 lg:px-0 shrink-0">
          <h2 className="text-3xl lg:text-5xl font-antipasto-pro capitalize">Our Mission</h2>
          <p className=" mt-2 text-erande-tetiary text-xs lg:text-xl font-futura-pt">
            To empower people to live better by making everyday life easier, more efficient, and more peaceful.
          </p>
        </div>
        <div className=" grow bg-[#E0E0E0] px-8 py-28 lg:p-28 lg:rounded-l-[40px] grid  lg:grid-cols-2 gap-16">
          {missionInfoItems.map((item) => (
            <div className="" key={item.id}>
              <div className="">
                <span className=" inline-flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 bg-white text-erande-black rounded-full text-2xl lg:text-3xl font-futura-pt">
                  {item.id}
                </span>
              </div>
              <div className=" mt-2">
                <p className=" text-2xl lg:text-4xl font-antipasto-pro capitalize text-erande-black">{item.title}:</p>
                <p className=" lg:mt-2 text-sm lg:text-base text-erande-tetiary font-futura-pt">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
