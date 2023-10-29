import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

function TeamMembersItem({ photo }) {
  return (
    <div className="membersBox">
      <div className="flex justify-between pt-[60px]">
        <img src={photo} alt="" />
        <div className="mr-6 my-auto">
          <CiFacebook color="#777" size={20} className="my-7 iconHover" />
          <CiTwitter color="#777" size={20} className="my-7 iconHover" />
          <CiLinkedin color="#777" size={20} className="my-7 iconHover" />
          <CiYoutube color="#777" size={20} className="my-7 iconHover" />
        </div>
      </div>
      <div className="my-2 ml-16">
        <h3 className="font-bold text-xl text-mainColor">Name</h3>
        <p className="text-[#777] text-lg">Simple short description</p>
      </div>
    </div>
  );
}

export default TeamMembersItem;
