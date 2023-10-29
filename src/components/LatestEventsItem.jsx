import React from "react";

function LatestEventsItem({ num, title }) {
  return (
    <div className=" w-[75px] border border-solid border-[#d4d4d4] text-center duration-300 hover:border-mainColor hovBor">
      <div>
        <div className="font-bold text-2xl text-mainColor p-[15px]">{num}</div>
        <div className="border border-solid duration-300 border-[#d4d4d4] text-[#777]">
          {title}
        </div>
      </div>
    </div>
  );
}

export default LatestEventsItem;
