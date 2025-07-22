import React from "react";

interface ExploreSectionProps {
  variant?: "blue" | "red" | "black";
}
const ExploreSection = (props: ExploreSectionProps) => {
  const { variant = "blue" } = props;
  return (
    <div className="">
      <h5
        className={
          "font-antipasto-pro text-xl lg:text-4xl mb-2 font-bold capitalize" +
          (variant === "blue" ? " text-erande-blue" : variant === "red" ? " text-erande-red" : " text-erande-black")
        }
      >
        Rest assured, we&apos;ve got you
      </h5>
      <p className="font-futura-pt text-sm lg:text-xl">
        Erande gives you the most efficient service that no one has ever seen. We have compiled information and analysis that helps us better the
        services we render.
      </p>
    </div>
  );
};

export default ExploreSection;
