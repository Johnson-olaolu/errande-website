import React from "react";

const Benefits = () => {
  return (
    <section className=" bg-erande-blue">
      <div className="px-8 lg:px-28 pt-10">
        <h5 className="font-antipasto-pro text-xl lg:text-4xl mb-2 font-bold capitalize">Rest assured, we&apos;ve got you</h5>
        <p className="font-futura-pt text-sm lg:text-xl">
          Erande gives you the most efficient service that no one has ever seen. We have compiled information and analysis that helps us better the
          services we render.
        </p>
      </div>
      <div className=" h-[960px] relative">
        <div className=" absolute top-[200px] left-1/2 transform -translate-x-1/2 z-[0]">
          <p className="uppercase font-brigands-expanded text-[108px] lg:text-[280px] text-opacity-15">ERANDE</p>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 flex"></div>
      </div>
    </section>
  );
};

export default Benefits;
