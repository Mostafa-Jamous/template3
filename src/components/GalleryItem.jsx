import React from "react";
import gallery1 from "../imgs/gallery-01.png";

function GalleryItem({ photo }) {
  return (
    <div>
      <div className="p-[15px] bg-white galleryShadowBox">
        <div className="relative overflow-hidden imgBorder">
          <img className="max-w-full duration-300" src={photo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
