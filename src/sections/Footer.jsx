import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import footer1 from "../imgs/gallery-01.png";
import footer2 from "../imgs/gallery-02.png";
import footer3 from "../imgs/gallery-03.jpg";
import footer4 from "../imgs/gallery-04.png";
import footer5 from "../imgs/gallery-05.jpg";
import footer6 from "../imgs/gallery-06.png";

function Footer() {
  return (
    <div className="bg-[#191919] pt-[70px] pb-2">
      <div className="mb-5 border-b border-[#b9b9b9] border-solid text-center md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto px-2 articlesContainer">
        <div className="box mb-5">
          <h3 className="text-white font-bold text-5xl mb-[20px]">Elzero</h3>
          <div className="flex gap-5 mx-auto w-fit mb-5">
            <div className="bg-[#313131] text-[#b9b9b9] inline-flex justify-center items-center w-[50px] h-[50px] duration-300 hover:bg-[#1877fe]">
              <FaFacebookF size={20} />
            </div>
            <div className="bg-[#313131] text-[#b9b9b9] inline-flex justify-center items-center w-[50px] h-[50px] duration-300 hover:bg-[#1da1fe]">
              <FaTwitter size={20} />
            </div>
            <div className="bg-[#313131] text-[#b9b9b9] inline-flex justify-center items-center w-[50px] h-[50px] duration-300 hover:bg-[#ff0000]">
              <FaYoutube size={20} />
            </div>
          </div>
          <p className="leading-8 text-[#b9b9b9]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            dignissimos omnis, distinctio ducimus magni .
          </p>
        </div>
        <div className="box mb-5">
          <div className="links">
            <div className="flex items-center gap-2 text-[#b9b9b9]">
              <HiChevronDoubleRight color="#2196f3" />
              important link1
            </div>
            <div className="flex items-center gap-2 text-[#b9b9b9]">
              <HiChevronDoubleRight color="#2196f3" />
              important link2
            </div>
            <div className="flex items-center gap-2 text-[#b9b9b9]">
              <HiChevronDoubleRight color="#2196f3" />
              important link3
            </div>
            <div className="flex items-center gap-2 text-[#b9b9b9]">
              <HiChevronDoubleRight color="#2196f3" />
              important link4
            </div>
          </div>
        </div>
        <div className="box mb-5">
          <div className="line">
            <MdLocationOn size={20} color="#2196f3" />
            <div>Syria, Damascus </div>
          </div>
          <div className="line">
            <FaClock size={20} color="#2196f3" />
            <div>Work Time: 10:00am to 6:00pm </div>
          </div>
          <div className="line">
            <BsFillTelephoneFill size={20} color="#2196f3" />
            <div>+963 654 657 321 </div>
          </div>
        </div>
        <div className="box footerGallery mb-5">
          <img src={footer1} alt="" />
          <img src={footer2} alt="" />
          <img src={footer3} alt="" />
          <img src={footer4} alt="" />
          <img src={footer5} alt="" />
          <img src={footer6} alt="" />
        </div>
      </div>
      <div className="mx-auto text-white text-xl w-fit mt-5">
        Made by Mostafa Jamous
      </div>
    </div>
  );
}

export default Footer;
