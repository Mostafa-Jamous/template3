import React from "react";
import MainTitle from "../components/MainTitle";
import features1 from "../imgs/features-01.jpg";
import features2 from "../imgs/features-02.jpg";
import features3 from "../imgs/features-03.jpg";
import FeaturesItem from "../components/FeaturesItem";

function Features() {
  return (
    <div className="py-[100px]" id="features">
      <MainTitle title="FEATURES" />
      <div className="md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto px-2 py-[100px] featuresContainer">
        <FeaturesItem
          photo={features1}
          title="Quality"
          bgColor="bg-[#f44036]"
          textColor="text-[#f44036]"
          borderColor="border-[#f44036]"
          afterColor="after:bg-[#f44036]"
          beforeColor="before:bg-[#f44036] before:opacity-50"
          fillColor="gradFill1"
        />
        <FeaturesItem
          photo={features2}
          title="Time"
          bgColor="bg-[#009688]"
          textColor="text-[#009688]"
          borderColor="border-[#009688]"
          afterColor="after:bg-[#009688]"
          beforeColor="before:bg-[#009688] before:opacity-50"
          fillColor="gradFill2"
        />
        <FeaturesItem
          photo={features3}
          title="Passion"
          bgColor="bg-[#03a9fa]"
          textColor="text-[#03a9fa]"
          borderColor="border-[#03a9fa]"
          afterColor="after:bg-[#03a9fa]"
          beforeColor="before:bg-[#03a9fa] before:opacity-50"
          fillColor="gradFill3"
        />
      </div>
    </div>
  );
}

export default Features;
