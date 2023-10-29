import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { LuCode2 } from "react-icons/lu";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { TfiMoney } from "react-icons/tfi";
import StatsItem from "../components/StatsItem";

function Stats() {
  return (
    <div className="stats" id="stats">
      <h1 className="font-bold text-[40px] w-fit mx-auto mb-[50px] relative">
        Our Awesome Stats
      </h1>
      <div className="text-center md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto px-2   articlesContainer">
        <StatsItem
          icon={<BsFillPersonFill className="mx-auto my-1 w-fit" size={40} />}
          num="150"
          title="Clients"
        />
        <StatsItem
          icon={<LuCode2 className="mx-auto my-1 w-fit" size={40} />}
          num="135"
          title="Projects"
        />
        <StatsItem
          icon={
            <GiEarthAfricaEurope className="mx-auto my-1 w-fit" size={40} />
          }
          num="50"
          title="Countries"
        />
        <StatsItem
          icon={<TfiMoney className="mx-auto my-1 w-fit" size={40} />}
          num="500"
          title="Money"
        />
      </div>
    </div>
  );
}

export default Stats;
