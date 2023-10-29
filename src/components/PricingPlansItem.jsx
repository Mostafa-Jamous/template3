import React from "react";
import { SiNike } from "react-icons/si";

function PricingPlansItem({ title, photo, price, top, vertical }) {
  return (
    <div className={`bg-white z-40 relative pricingBox ${top}`}>
      <div className={`verticalWriting ${vertical}`}>Most Popular</div>
      <div className="font-bold text-2xl mx-auto w-fit my-5">{title}</div>
      <img className="mx-auto w-24 h-24" src={photo} alt="" />
      <div>
        <div className="font-bold text-6xl mx-auto w-fit mt-5 text-mainColor">
          {price}
        </div>
        <div className="mx-auto w-fit text-[#777] mt-2 mb-5">Per Month</div>
      </div>
      <div className="px-3">
        <div className="flex items-center gap-2 border-t border-[#e6e6e6] py-6">
          <SiNike size={25} color="#2196f3" />
          10GB HDD Space
        </div>
        <div className="flex items-center gap-2 border-t border-[#e6e6e6] py-6">
          <SiNike size={25} color="#2196f3" />5 Email Addresses
        </div>
        <div className="flex items-center gap-2 border-t border-[#e6e6e6] py-6">
          <SiNike size={25} color="#2196f3" />2 Subdomains
        </div>
        <div className="flex items-center gap-2 border-t border-[#e6e6e6] py-6">
          <SiNike size={25} color="#2196f3" />4 Databases
        </div>
        <div className="flex items-center gap-2 border-t border-[#e6e6e6] py-6">
          <SiNike size={25} color="#2196f3" />
          Basic Support
        </div>
      </div>
      <button className="text-mainColor border-2 px-6 py-3 mx-auto font-bold my-4 rounded-md block duration-300 border-mainColor hover:text-white hover:border-white hover:bg-mainColor">
        Choose Plan
      </button>
    </div>
  );
}

export default PricingPlansItem;
