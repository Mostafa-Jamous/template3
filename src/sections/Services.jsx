import React from "react";
import MainTitle from "../components/MainTitle";
import ServicesItem from "../components/ServicesItem";
import { GrShieldSecurity } from "react-icons/gr";
import { GrConfigure } from "react-icons/gr";
import { GrMapLocation } from "react-icons/gr";
import { FaLaptop } from "react-icons/fa";
import { VscSymbolColor } from "react-icons/vsc";
import { AiTwotoneSound } from "react-icons/ai";

function Services() {
  return (
    <div className="bg-bgColor py-[100px]" id="services">
      <MainTitle title="SERVICES" />
      <div className="md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto px-2 py-[100px] servicesContainer">
        <ServicesItem
          icon={<GrShieldSecurity size={60} className="mx-auto my-4" />}
          title="Security"
        />
        <ServicesItem
          icon={<GrConfigure size={60} className="mx-auto my-4" />}
          title="Fixing Issues"
        />
        <ServicesItem
          icon={<GrMapLocation size={60} className="mx-auto my-4" />}
          title="Location"
        />
        <ServicesItem
          icon={<FaLaptop size={60} className="mx-auto my-4" />}
          title="Coding"
        />
        <ServicesItem
          icon={<VscSymbolColor size={60} className="mx-auto my-4" />}
          title="Themes"
        />
        <ServicesItem
          icon={<AiTwotoneSound size={60} className="mx-auto my-4" />}
          title="Marketing"
        />
      </div>
    </div>
  );
}

export default Services;
