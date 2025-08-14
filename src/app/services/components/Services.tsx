import Image from "next/image";
import React from "react";

const Services = () => {
  const serviceItems = [
    {
      title: "Laundry & Dry Cleaning",
      description:
        "Experience hassle-free garment care with Erande. Whether it’s delicate fabrics or everyday wear, we provide expert washing, drying, ironing, and full dry-cleaning services. Your clothes come back fresh, crisp, and ready to wear, all without you leaving home.",
      image: "/images/Services1.png",
      color: "#173660",
    },
    {
      title: "Home & Office Cleaning",
      description:
        "A clean space is a happy place. From routine tidying to deep cleaning, fumigation, and pest control, our professional teams make your home and workplace spotless and safe. We handle floors, surfaces, windows, kitchens, bathrooms, and more, so you don’t have to.",
      image: "/images/Services2.png",
      color: "#E03826",
    },
    {
      title: "Pharmacy & OTC Medication Delivery",
      description:
        "Stay healthy (without the stress). We provide prompt pickup and delivery of over-the-counter medicines and supplements, handled discreetly and with care. Whether it’s vitamins, pain relief, or health essentials, Erande ensures what you need arrives safely and on time.",
      image: "/images/Services3.png",
      color: "#E0E0E0",
    },
    {
      title: "Food Delivery",
      description:
        "Your pantry stocked without the hassle. Choose your items from supermarkets or local stores, and our runners will shop and deliver them right to you. We guarantee freshness, accuracy, and convenience with every order.",
      image: "/images/Services4.png",
      color: "#B0D1FF",
    },
    {
      title: "Grocery Shopping & Delivery",
      description:
        "Craving your favorite meal? Erande connects you with local restaurants and eateries for fresh, hot food delivered directly to your door. From quick bites to full meals, enjoy hassle-free dining experiences anytime, anywhere.",
      image: "/images/Services-5.png",
      color: "#173660",
    },
    {
      title: "Market Errand Runs (Coming soon)",
      description:
        "Need those fresh spices, veggies, or household staples from the open market? Our personal shoppers source and deliver exactly what you need, saving you time and the market hustle — with reliable, friendly service.",
      image: "/images/Services-6.png",
      color: "#E03826",
    },
    {
      title: "At-Home Grooming Services (Coming soon)",
      description:
        "Look and feel your best without leaving your home. Book expert hair stylists for cuts, braids, and styling, or pamper yourself with manicures and pedicures complete with massages. Professional tools and products come to you for salon-quality care.",
      image: "/images/Services-7.png",
      color: "#E0E0E0",
    },
    {
      title: "Mobile Vehicle Detailing & Washing (Coming soon)",
      description:
        "Keep your car shining without the drive to a car wash. Our pros bring premium vehicle cleaning supplies to your doorstep, offering exterior washes, interior vacuuming, tire dressing, and window cleaning, all tailored to your schedule.",
      image: "/images/Services-8.png",
      color: "#B0D1FF",
    },
    {
      title: "Vehicle Towing & Roadside Assistance (Coming soon)",
      description:
        "When trouble hits the road, count on Erande’s quick and dependable towing and roadside support. From jump-starts to tire changes and lockout assistance, we’re here 24/7 to get you moving again safely.",
      image: "/images/Services-9.png",
      color: "#173660",
    },
    {
      title: "Package Pickup & Delivery",
      description:
        "Each service is backed by trusted, vetted partners and supported by real-time tracking technology, ensuring reliability, safety, and convenience every step of the way.",
      image: "/images/Services-10.png",
      color: "#E03826",
    },
  ];

  return (
    <section className=" bg-white py-16 lg:py-40 pb-16 lg:pb-20">
      <div className=" space-y-14 lg:space-y-16 pb-16 lg:pb-[84px]">
        {serviceItems.map((item, index) =>
          index % 2 === 0 ? (
            <div key={index} className=" flex w-full items-center flex-col lg:flex-row gap-12 lg:gap-28 pl-5 lg:pl-24">
              <div className="text-erande-blue w-full lg:max-w-[378px] shrink-0 px-5 lg:px-0">
                <h2 className="text-2xl  lg:text-5xl font-antipasto-pro capitalize">{item.title}</h2>
                <p className=" mt-2 text-erande-tetiary text-xs lg:text-xl font-futura-pt">{item.description}</p>
              </div>
              <div style={{ backgroundColor: item.color }} className={` grow p-11 lg:p-28 rounded-l-2xl lg:rounded-l-[40px] `}>
                <Image src={item.image} alt="" height={408} width={626} />
              </div>
            </div>
          ) : (
            <div key={index} className=" flex w-full items-center flex-col-reverse lg:flex-row gap-12 lg:gap-28 pr-5 lg:pr-24">
              <div style={{ backgroundColor: item.color }} className={` grow p-11 lg:p-28 rounded-r-2xl lg:rounded-r-[40px] `}>
                <Image src={item.image} alt="" height={408} width={626} />
              </div>
              <div className="text-erande-blue w-full max-w-[378px] shrink-0 text-right">
                <h2 className=" text-2xl lg:text-5xl font-antipasto-pro capitalize">{item.title}</h2>
                <p className=" mt-2 text-erande-tetiary text-xs lg:text-xl font-futura-pt">{item.description}</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className=" px-5 lg:px-28">
        <p className=" font-antipasto-pro text-[#666666] text-lg lg:text-3xl text-justify">
          Each service is backed by trusted, vetted partners and supported by real-time tracking technology, ensuring reliability, safety, and
          convenience every step of the way.
        </p>
      </div>
      {/* <div className=" px-8 lg:px-52 ">
        <div className="h-px bg-erande-black w-full"></div>
      </div> */}
    </section>
  );
};

export default Services;
