import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function ArticlesItem({ photo }) {
  return (
    <div>
      <div className="boxShadow rounded-[6px] overflow-hidden duration-300 hover:-translate-y-[10px]">
        <div>
          <img className="max-w-full" src={photo} alt="" />
        </div>
        <div className="px-2 ">
          <h1 className="font-bold text-lg py-3">Test Title</h1>
          <p className="px-1 text-[#777] leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, adipisci .
          </p>
        </div>
        <div className="font-bold text-mainColor flex justify-between items-center py-1 px-2 mt-2">
          <a href="#aa">Read More</a>
          <IoIosArrowRoundForward className="articlesIcon" size={20} />
        </div>
      </div>
    </div>
  );
}

export default ArticlesItem;
