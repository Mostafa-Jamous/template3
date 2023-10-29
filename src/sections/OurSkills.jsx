import React from "react";
import MainTitle from "../components/MainTitle";
import skills from "../imgs/skills.png";
import OurSkillsItem from "../components/OurSkillsItem";

function OurSkills() {
  return (
    <div className="py-[100px]" id="ourSkills">
      <MainTitle title="OUR SKILLS" />
      <div className="md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto px-2 py-[100px] max-lg:grid-cols-1 ourSkillsContainer">
        <img className="skillsImg max-lg:hidden mx-auto" src={skills} alt="" />
        <div>
          <OurSkillsItem name="Html" percentage="80%" widthPercentage="80%" />
          <OurSkillsItem name="Css" percentage="75%" widthPercentage="75%" />
          <OurSkillsItem name="Sql" percentage="70%" widthPercentage="70%" />
          <OurSkillsItem
            name="Javascript"
            percentage="70%"
            widthPercentage="70%"
          />
        </div>
      </div>
    </div>
  );
}

export default OurSkills;
