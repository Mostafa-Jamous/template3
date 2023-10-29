import React from "react";

function ServicesItem({ icon, title }) {
  return (
    <div className="servicesBox">
      <div className="w-full my-7">
        {icon}
        <div className="font-bold text-3xl mx-auto w-fit text-mainColor">
          {title}
        </div>
      </div>
      <div className="relative p-[15px] bg-[#f9f9f9] text-right infoBox">
        <a className="text-mainColor" href="#af">
          Details
        </a>
      </div>
    </div>
  );
}

export default ServicesItem;
