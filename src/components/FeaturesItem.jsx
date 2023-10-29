import React from "react";

function FeaturesItem({
  photo,
  title,
  bgColor,
  textColor,
  borderColor,
  afterColor,
  beforeColor,
  fillColor,
}) {
  return (
    <div className="featuresBorder text-center border border-[#ccc]">
      <div>
        <div className={`imgHolder relative overflow-hidden ${beforeColor}`}>
          <img className="max-w-full" src={photo} alt="" />
        </div>
        <h2
          className={`relative text-3xl font-bold m-auto w-fit bottomLine ${afterColor}`}
        >
          {title}
        </h2>
        <p className="my-7 px-4 text-[#777] leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vero
          nisi quaerat ducimus vel recusandae reprehenderit.
        </p>
        <a
          className={`block border border-[3px] w-fit mx-auto mb-5 font-bold py-[10px] px-[30px] rounded-[6px] text-xl duration-300 gradFill ${borderColor} ${textColor} ${bgColor} ${fillColor}`}
          href="#sd"
        >
          More
        </a>
      </div>
    </div>
  );
}

export default FeaturesItem;
