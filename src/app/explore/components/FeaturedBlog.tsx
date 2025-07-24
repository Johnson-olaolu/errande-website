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
    <section className="bg-white py-40 px-24">
      <div className=" grid grid-cols-2 mb-32  gap-20">
        {props.align === "left" && <Image src={props.image} alt={props.title} width={623} height={504} className="w-full h-auto" />}

        <div className=" py-3">
          <div className=" flex mb-8 bg-erande-blue-opacity-15 rounded-full gap-2 items-center capitalize p-2 w-[182px]">
            <span className=" text-white font-antipasto-pro text-sm px-5 py-3 bg-erande-blue rounded-full">News</span>
            <span className=" text-sm text-erande-blue font-futura-pt font-medium">10mins Read.</span>
          </div>
          <div className="text-erande-blue w-full shrink-0">
            <h2 className=" text-4xl font-antipasto-pro capitalize mb-7 max-w-[400px]">{props.title}</h2>
            <p className=" text-erande-tetiary text-xl font-futura-pt mb-12">{props.text}</p>
            <button className=" inline-flex items-center gap-2 rounded-full border border-erande-blue px-5 py-2 text-erande-blue hover:bg-erande-blue hover:text-white cursor-pointer">
              <span className=" font-medium text-xs font-futura-pt">Read More</span>
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
        {props.align === "right" && <Image src={props.image} alt={props.title} width={623} height={504} className="w-full h-auto" />}
      </div>
      <div className=" px-8 lg:px-52 ">
        <div className="h-px bg-erande-black w-full"></div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
