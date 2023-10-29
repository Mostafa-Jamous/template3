import React from "react";

function OurSkillsItem({ name, percentage, widthPercentage }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2 mt-5">
        <span className="font-bold text-2xl">{name}</span>
        <span className="text-sm border border-solid border-[#ccc] text-mainColor rounded-[4px] py-[3px] px-[5px]">
          {percentage}
        </span>
      </div>
      <div className="relative h-8 bg-[#eee]">
        <span
          className="absolute bg-mainColor h-full"
          style={{ width: widthPercentage }}
        ></span>
      </div>
    </div>
  );
}

export default OurSkillsItem;
