import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

interface FeaturedBlogProps {
  align: "left" | "right";
  title: string;
  text: string;
  image: string;
}
const FeaturedBlog = (props: FeaturedBlogProps) => {
  return (
    <section className="bg-white py-16 lg:py-40 px-5  lg:px-24">
      <div className=" grid lg:grid-cols-2 mb-20 lg:mb-32 gap-14  lg:gap-20">
        <div
          className={
            " py-3 flex flex-col justify-center items-center lg:items-start gap-8 " +
            (props.align === "right" ? "" : "lg:col-start-2 lg:col-end-3 lg:row-start-1 ")
          }
        >
          <div className=" flex bg-erande-blue-opacity-15 rounded-full gap-2 items-center capitalize p-1.5 lg:p-2">
            <span className=" text-white font-antipasto-pro text-sm px-5 py-2 lg:py-3 bg-erande-blue rounded-full">News</span>
            <span className=" text-xs lg:text-sm text-erande-blue font-futura-pt font-medium pr-2">10mins Read.</span>
          </div>
          <div className="text-erande-blue w-full shrink-0 text-center lg:text-left">
            <h2 className=" text-2xl lg:text-4xl font-antipasto-pro capitalize mb-2 lg:mb-7 max-w-[400px]">{props.title}</h2>
            <p className=" text-erande-tetiary text-xs lg:text-xl font-futura-pt mb-8 lg:mb-12">{props.text}</p>
            <button className=" inline-flex items-center gap-2 rounded-full border border-erande-blue px-5 py-2 text-erande-blue hover:bg-erande-blue hover:text-white cursor-pointer">
              <span className=" font-medium text-xs font-futura-pt">Read More</span>
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
        <Image
          src={props.image}
          alt={props.title}
          width={623}
          height={504}
          className={"w-full h-auto" + (props.align === "right" ? "" : "lg:col-start-1 lg:col-end-2 lg:row-start-1")}
        />
      </div>
      <div className=" px-8 lg:px-52 ">
        <div className="h-px bg-erande-black w-full"></div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
