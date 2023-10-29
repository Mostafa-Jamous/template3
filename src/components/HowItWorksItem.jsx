import React from "react";

function HowItWorksItem({ photo, title, bgColor }) {
  return (
    <div className="flex items-center gap-6 mt-5 px-5 py-2 border-2 border-solid border-white relative z-10 bg-[#f6f5f5] HowWorksBox">
      <img className="w-16 h-16" src={photo} alt="" />
      <div>
        <h1 className="font-bold text-2xl my-3">{title}</h1>
        <p className="text-[#777] leading-7 mb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          distinctio dolorem atque accusantium aperiam praesentium nostrum in
          perspiciatis aliquam ea magni.
        </p>
      </div>
    </div>
  );
}

export default HowItWorksItem;
