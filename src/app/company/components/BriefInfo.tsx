import Image from "next/image";
import React from "react";

const BriefInfo = () => {
  return (
    <section className=" px-24 py-36 bg-white">
      <div className=" flex items-center justify-between">
        <div className="text-erande-blue w-full max-w-[694px]">
          <h2 className=" text-4xl font-antipasto-pro capitalize">
            Simplifying Life Through <br />
            Technology!
          </h2>
          <p className=" mt-11  text-lg font-futura-pt">
            Life’s too short for rush hour traffic and endless to-do lists. Erande is an errand marketplace that puts everyday errands on autopilot
            with one easy app. Tap once to get your laundry done, your home cleaned, groceries restocked, medications delivered, or packages sent
            across town.
            <br />
            <br />
            Behind the scenes, our vetted partners and real-time tracking ensure that every order is safe, transparent, and delivered on time, every
            time, simplifying your life so you can focus on what matters most
            <br />
            <br />
            Whether you’re racing between meetings, juggling school runs, running a growing business, or you’re a student in need of an extra hand,
            Erande gives you back the one thing money can’t buy – time. Because at the end of the day, what truly matters isn’t just getting things
            done — it’s having the time and freedom to live.
          </p>
        </div>
        <Image src="/images/Brief-info.png" alt="Brief Info" width={472} height={500} />
      </div>
    </section>
  );
};

export default BriefInfo;
