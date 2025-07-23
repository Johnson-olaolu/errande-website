import Image from "next/image";
import React from "react";

const Services = () => {
  const serviceItems = [
    {
      title: "Laundry-dry-cleaning",
      description: "laundry-dry-cleaning: To empower people to live better by making everyday life easier, more efficient, and more  peaceful.",
      image: "/images/Services1.png",
      color: "#173660",
    },
    {
      title: "Home-cleaning",
      description: "House & Apartment Cleaning, Fumigation & Pest Control, Office Cleaning.",
      image: "/images/Services2.png",
      color: "#E03826",
    },
    {
      title: "Pharmacy",
      description: "OTC Medication: To empower people to live better by making everyday life easier, more efficient, and more  peaceful.",
      image: "/images/Services3.png",
      color: "#E0E0E0",
    },
    {
      title: "Food-delivery",
      description: "Restaurant Meals: To empower people to live better by making everyday life easier, more efficient, and more  peaceful.",
      image: "/images/Services1.png",
      color: "#B0D1FF",
    },
  ];

  return (
    <section className=" bg-white py-40 pb-56">
      <div className=" space-y-96 pb-[300px]">
        {serviceItems.map((item, index) =>
          index % 2 === 0 ? (
            <div key={index} className=" flex w-full items-center gap-28 pl-24">
              <div className="text-erande-blue w-full max-w-[378px] shrink-0">
                <h2 className=" text-5xl font-antipasto-pro capitalize">{item.title}</h2>
                <p className=" mt-2 text-erande-tetiary text-xl font-futura-pt">{item.description}</p>
              </div>
              <div style={{ backgroundColor: item.color }} className={` grow p-28 rounded-l-[40px] `}>
                <Image src={item.image} alt="" height={408} width={626} />
              </div>
            </div>
          ) : (
            <div key={index} className=" flex w-full items-center gap-28 pr-24">
              <div style={{ backgroundColor: item.color }} className={` grow p-28 rounded-r-[40px] `}>
                <Image src={item.image} alt="" height={408} width={626} />
              </div>
              <div className="text-erande-blue w-full max-w-[378px] shrink-0 text-right">
                <h2 className=" text-5xl font-antipasto-pro capitalize">{item.title}</h2>
                <p className=" mt-2 text-erande-tetiary text-xl font-futura-pt">{item.description}</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className=" px-8 lg:px-52 ">
        <div className="h-px bg-erande-black w-full"></div>
      </div>
    </section>
  );
};

export default Services;
