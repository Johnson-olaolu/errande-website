"use client";
import { faqQuestionAnswers } from "@/utils/constants";
import { ul } from "motion/react-client";
import Image from "next/image";
import React, { useState } from "react";

interface FAQSectionProps {
  variant?: "blue" | "red" | "black";
}
const FAQSection = ({ variant = "blue" }: FAQSectionProps) => {
  const [currentFAQ, setCurrentFAQ] = useState(1);
  return (
    <div className="">
      <div className="flex justify-center mb-6 lg:mb-10 ">
        <p
          className={
            "text-lg lg:text-3xl capitalize font-antipasto-pro py-2 lg:py-5 px-5 lg:px-12 rounded-full bg-erande-offwhite font-bold" +
            (variant === "blue" ? " text-erande-blue" : variant === "red" ? " text-erande-red" : " text-erande-black")
          }
        >
          Frequently asked questions
        </p>
      </div>
      <div className=" flex w-full rounded-3xl lg:rounded-[48px] overflow-hidden bg-erande-offwhite border border-white">
        <div className=" hidden lg:block h-[796px] bg-erande-offwhite grow px-20 py-24">
          <div className="overflow-y-scroll h-full custom-scrollbar">
            <ul className=" space-y-6  h-full pr-12">
              {faqQuestionAnswers.map((faq, index) => (
                <li
                  onClick={() => setCurrentFAQ(faq.id)}
                  key={index}
                  className={" py-5 px-10 rounded-xl border-2 border-white cursor-pointer " + (currentFAQ === faq.id ? " bg-white" : "")}
                >
                  <div className=" text-erande-black font-futura-pt">
                    <p className="">{faq.question}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={
            " w-full lg:w-[480px] shrink-0 py-12  lg:py-28 px-10 lg:px-14 " +
            (variant === "blue" ? "bg-erande-blue" : variant === "red" ? "bg-erande-red" : "bg-erande-black")
          }
        >
          <div className=" w-full lg:h-full border-2 lg:border-4 border-white relative rounded-3xl lg:rounded-[40px] py-7 lg:py-14 px-6 lg:px-10">
            <Image
              src="/icons/corner-star.svg"
              alt="corner-star"
              height={56}
              width={56}
              className="h-14 lg:h-20 w-auto absolute top-0 right-0 transform translate-x-[29px] lg:translate-x-[42px] -translate-y-[29px] lg:-translate-y-[42px]"
            />
            <Image
              src="/icons/corner-star.svg"
              alt="corner-star"
              height={56}
              width={56}
              className="h-14 lg:h-20 w-auto absolute bottom-0 left-0 transform -translate-x-[29px] lg:-translate-x-[42px] translate-y-[29px] lg:translate-y-[42px]"
            />
            <div className=" h-full flex flex-col  gap-2 lg:gap-5 text-center lg:text-left">
              <h2 className=" text-2xl lg:text-5xl font-antipasto-pro text-white font-bold">Answers</h2>
              <div className=" flex-grow bg-erande-offwhite rounded-3xl min-h-[240px]">
                <div className=" px-6 py-7 font-futura-pt text-erande-black text-[13px] lg:text-base leading-5 capitalize space-y-2.5">
                  <p className="">{faqQuestionAnswers.find((faq) => faq.id === currentFAQ)?.answer}</p>
                  {faqQuestionAnswers.find((faq) => faq.id === currentFAQ)?.items ? (
                    <ul className=" list-disc pl-4 space-y-1">
                      {faqQuestionAnswers
                        .find((faq) => faq.id === currentFAQ)
                        ?.items?.map((item, index) => (
                          <li key={index} className="">
                            {item}
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-16 lg:hidden overflow-x-auto custom-scrollbar-mobile pb-3">
            <div className="border-white border p-2.5 rounded-lg " style={{ width: "max-content" }}>
              <ul className=" flex items-center gap-4">
                {faqQuestionAnswers.map((faq, index) => (
                  <li
                    onClick={() => setCurrentFAQ(faq.id)}
                    key={index}
                    className={
                      " py-3 px-6 rounded-lg border border-white cursor-pointer " +
                      (currentFAQ === faq.id ? " bg-white text-erande-black" : " text-white ")
                    }
                  >
                    <p className=" text-xs font-futura-pt whitespace-nowrap">{faq.question}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
