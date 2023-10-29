import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function TestimonialsItem({ photo, name, job, boxClass }) {
  return (
    <div>
      <div className={boxClass}>
        <img
          className="absolute -right-[10px] -top-[50px] w-[100px] h-[100px] rounded-full border-[10px] border-solid border-[#ececec]"
          src={photo}
          alt=""
        />
        <h3 className="mb-3 font-bold text-xl">{name}</h3>
        <div className="text-mainColor mb-3">{job}</div>
        <div className="flex gap-[2px] items-center mb-1">
          <AiFillStar color="gold" />
          <AiFillStar color="gold" />
          <AiFillStar color="gold" />
          <AiFillStar color="gold" />
          <AiOutlineStar />
        </div>
        <p className="text-[#777] leading-7">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
          voluptate rerum eum? Cupiditate temporibus quae cumque.
        </p>
      </div>
    </div>
  );
}

export default TestimonialsItem;
