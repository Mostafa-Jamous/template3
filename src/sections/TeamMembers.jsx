import React from "react";
import MainTitle from "../components/MainTitle";
import TeamMembersItem from "../components/TeamMembersItem";
import team1 from "../imgs/team-01.jpg";
import team2 from "../imgs/team-02.jpg";
import team3 from "../imgs/team-03.jpg";
import team4 from "../imgs/team-04.jpg";
import team5 from "../imgs/team-05.png";
import team6 from "../imgs/team-06.png";
import team7 from "../imgs/team-07.jpg";
import team8 from "../imgs/team-08.jpg";

function TeamMembers() {
  return (
    <div className="my-[100px]" id="teamMembers">
      <MainTitle title="TEAM MEMBERS" />
      <div className="md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto px-2 py-[100px] teamMembersContainer">
        <TeamMembersItem photo={team1} />
        <TeamMembersItem photo={team2} />
        <TeamMembersItem photo={team3} />
        <TeamMembersItem photo={team4} />
        <TeamMembersItem photo={team5} />
        <TeamMembersItem photo={team6} />
        <TeamMembersItem photo={team7} />
        <TeamMembersItem photo={team8} />
      </div>
    </div>
  );
}

export default TeamMembers;
