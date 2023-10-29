import React from "react";
import MainTitle from "../components/MainTitle";
import workImg from "../imgs/work-steps.png";
import work1 from "../imgs/work-steps-1.png";
import work2 from "../imgs/work-steps-2.png";
import work3 from "../imgs/work-steps-3.png";
import HowItWorksItem from "../components/HowItWorksItem";

function HowItWorks() {
  return (
    <div className="bg-bgColor py-[100px]" id="howItWorks">
      <MainTitle title="HOW IT WORKS" />
      <div className="md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto px-2 py-[100px] ourSkillsContainer">
        <img className="mx-auto" src={workImg} alt="" />
        <div>
          <HowItWorksItem photo={work1} title="Business Analysis" />
          <HowItWorksItem photo={work2} title="Architecture" />
          <HowItWorksItem photo={work3} title="Development" />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
