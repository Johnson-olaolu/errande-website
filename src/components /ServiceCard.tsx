import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  color: "blue" | "red" | "black";
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  const { title, description, imageUrl } = props;
  return (
    <div
      className={
        " max-w-[360px] w-full rounded-xl bg-[#EFEFEF] px-5 py-6 border " +
        (props.color === "blue"
          ? " border-erande-blue text-erande-blue"
          : props.color === "red"
          ? " border-erande-red text-erande-red"
          : " border-erande-black text-erande-black")
      }
    >
      <Image
        src={imageUrl}
        alt={title}
        width={260}
        height={260}
        className="rounded-full mx-auto object-cover w-[230px] lg:w-[260px] h-[230px] lg:h-[260px]"
      />
      <div
        className={
          " py-5 px-6 rounded-xl bg-white border mt-8" +
          (props.color === "blue" ? " border-erande-blue" : props.color === "red" ? " border-erande-red" : " border-erande-black")
        }
      >
        <h6 className=" text-2xl font-antipasto-pro font-medium">{title}</h6>
        <p className=" text-gray-600 font-futura-pt text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
