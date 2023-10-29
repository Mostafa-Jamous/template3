import React from "react";
import MainTitle from "../components/MainTitle";
import PricingPlansItem from "../components/PricingPlansItem";
import pricing1 from "../imgs/hosting-basic.png";
import pricing2 from "../imgs/hosting-advanced.png";
import pricing3 from "../imgs/hosting-professional.png";

function PricingPlans() {
  return (
    <div className="bg-bgColor py-[100px]" id="pricingPlans">
      <MainTitle title="PRICING PLANS" />
      <div className="relative md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto px-2 py-[100px] pricingPlansContainer">
        <PricingPlansItem
          title="Basic"
          photo={pricing1}
          price="$15"
          vertical="hidden"
        />
        <PricingPlansItem
          title="Advanced"
          photo={pricing2}
          price="$25"
          top="-top-[20px]"
          vertical="absolute bg-mainColor text-white font-bold right-[20px] w-[40px] px-[10px] pt-[10px] pb-[35px]"
        />
        <PricingPlansItem
          title="Professional"
          photo={pricing3}
          price="$45"
          vertical="hidden"
        />
      </div>
    </div>
  );
}

export default PricingPlans;
