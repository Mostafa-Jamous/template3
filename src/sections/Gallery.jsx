import React from "react";
import MainTitle from "../components/MainTitle";
import gallery1 from "../imgs/gallery-01.png";
import gallery2 from "../imgs/gallery-02.png";
import gallery3 from "../imgs/gallery-03.jpg";
import gallery4 from "../imgs/gallery-04.png";
import gallery5 from "../imgs/gallery-05.jpg";
import gallery6 from "../imgs/gallery-06.png";
import GalleryItem from "../components/GalleryItem";

function Gallery() {
  return (
    <div className="relative py-[100px] bg-bgColor" id="gallery">
      <MainTitle title="GALLERY" />
      <div className="md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto px-2 py-[100px] galleryContainer">
        <GalleryItem photo={gallery1} />
        <GalleryItem photo={gallery2} />
        <GalleryItem photo={gallery3} />
        <GalleryItem photo={gallery4} />
        <GalleryItem photo={gallery5} />
        <GalleryItem photo={gallery6} />
      </div>
    </div>
  );
}

export default Gallery;
