import React from "react";

function StatsItem({ icon, num, title }) {
  return (
    <div className="bg-white py-[30px] px-[15px] text-center relative opacity-80 duration-300 hover:opacity-100  statsBox">
      {icon}
      <div className="font-bold text-5xl mb-2">{num}</div>
      <div className="text-mainColor italic font-bold text-xl">{title}</div>
    </div>
  );
}

export default StatsItem;
