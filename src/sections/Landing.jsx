import React from "react";
import landing from "../imgs/landing-image.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Landing() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute left-0 -top-24 -skew-y-[6deg] w-full h-full bg-bgColor -z-10"></div>
      <div className="md:flex md:items-center pb-[120px] z-10 md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="text-center flex-1">
          <h1 className="font-bold text-3xl my-5">Welcome, To Elzero World</h1>
          <p className="text-xl mt-5 mx-auto text-[#777]">
            Here Iam gonna share everything about my life. Books Iam reading,
            Games Iam Playing, Stories and Events
          </p>
        </div>
        <div className="flex-1">
          <img className="landImg animationImg" src={landing} alt="" />
        </div>
      </div>
      <a
        className="absolute bottom-[30px] left-[50%] -translate-x-[50%]"
        href="#articles"
      >
        <MdKeyboardDoubleArrowDown
          className="hover:text-[#1787e0] animationArrow"
          color="#2196f3 "
          size={45}
        />
      </a>
    </div>
  );
}

export default Landing;
