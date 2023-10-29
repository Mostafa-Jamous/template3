import React from "react";

function MainTitle({ title }) {
  return (
    <div>
      <h3 className="relative mt-[100px] mx-auto py-[10px] px-[20px] font-bold text-3xl border-2 border-black w-fit z-30 duration-300 mainTitle">
        {title}
      </h3>
    </div>
  );
}

export default MainTitle;
