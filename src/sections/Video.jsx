import React from "react";
import MainTitle from "../components/MainTitle";
import { FaRandom } from "react-icons/fa";
import video from "../imgs/video-preview.jpg";

function Video() {
  return (
    <div className="py-[100px]" id="topVideos">
      <MainTitle title="TOP VIDEOS" />
      <div className="relative md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto py-[100px] ">
        <div className="holder">
          <div className="min-w-[300px] bg-white">
            <div className="flex justify-between p-4 bg-[#f4f4f4]">
              <div className="font-bold">Top Videos</div>
              <FaRandom />
            </div>
            <div>
              <div className="p-[20px] border-t border-solid border-bgColor cursor-pointer duration-300 hover:bg-[#fafafa] hover:text-mainColor">
                How To Create Sub Domain
                <div className="mt-[10px] text-[#777]">05:18</div>
              </div>
              <div className="p-[20px] border-t border-solid border-bgColor cursor-pointer duration-300 hover:bg-[#fafafa] hover:text-mainColor">
                Playing With The DNS
                <div className="mt-[10px] text-[#777]">03:18</div>
              </div>
              <div className="p-[20px] border-t border-solid border-bgColor cursor-pointer duration-300 hover:bg-[#fafafa] hover:text-mainColor">
                Everything About The Virtual Hosts
                <div className="mt-[10px] text-[#777]">05:25</div>
              </div>
              <div className="p-[20px] border-t border-solid border-bgColor cursor-pointer duration-300 hover:bg-[#fafafa] hover:text-mainColor">
                How To Monitor Your Website
                <div className="mt-[10px] text-[#777]">04:16</div>
              </div>
              <div className="p-[20px] border-t border-solid border-bgColor cursor-pointer duration-300 hover:bg-[#fafafa] hover:text-mainColor">
                Uncharted Beating The Last Boss
                <div className="mt-[10px] text-[#777]">07:48</div>
              </div>
              <div className="p-[20px] border-t border-solid border-bgColor cursor-pointer duration-300 hover:bg-[#fafafa] hover:text-mainColor">
                Ys Oath In Felghana Overview
                <div className="mt-[10px] text-[#777]">03:12</div>
              </div>
              <div className="p-[20px] border-t border-solid border-bgColor cursor-pointer duration-300 hover:bg-[#fafafa] hover:text-mainColor">
                Ys Series All Games Ending{" "}
                <div className="mt-[10px] text-[#777]">08:10</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-[10px] bg-[#e2e2e2] justify-between">
            <img className="max-w-full" src={video} alt="" />
            <div className="p-[20px] bg-white mt-[10px]">
              Everything About The Virtual Hosts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
