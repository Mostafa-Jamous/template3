import React from "react";
import MainTitle from "../components/MainTitle";
import event from "../imgs/events.png";
import LatestEventsItem from "../components/LatestEventsItem";

function LatestEvents() {
  return (
    <div className="py-[100px]" id="latestEvents">
      <MainTitle title="LATEST EVENTS" />
      <div className="md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto px-2 py-[100px] ">
        <div className="ourSkillsContainer">
          <img className="max-w-[450px] mx-auto" src={event} alt="" />
          <div>
            <div className="flex justify-center my-5 gap-5">
              <LatestEventsItem num="15" title="Days" />
              <LatestEventsItem num="13" title="Hours" />
              <LatestEventsItem num="49" title="Minutes" />
              <LatestEventsItem num="50" title="Seconds" />
            </div>
            <div className="font-bold w-fit text-3xl my-8 mx-auto">
              Tech Masters Event 2021
            </div>
            <p className="text-[#777] leading-8 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              placeat voluptatibus itaque qui? Tempora dolor provident qui
              repellendus deleniti! Fugiat incidunt obcaecati explicabo.
            </p>
          </div>
        </div>
        <div className="mobileForm flex justify-center items-center mx-auto rounded-3xl bg-[#d8d8d8] w-[600px] my-10 h-28">
          <input
            className="outline-none w-96 mr-6 rounded-3xl py-3 px-5 placeholder:text-[#777]"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="text-white text-lg bg-mainColor py-3 px-5 font-bold rounded-3xl hover:bg-opacity-75">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default LatestEvents;
