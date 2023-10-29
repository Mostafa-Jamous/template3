import {
  FaComment,
  FaPercent,
  FaChartBar,
  FaPlayCircle,
  FaServer,
  FaClipboard,
  FaBuilding,
  FaUserAlt,
} from "react-icons/fa";
import megaMenu from "../imgs/megamenu.png";
import { BsCalendar2DateFill, BsFillCheckCircleFill } from "react-icons/bs";
import MegaMenuItem from "../components/MegaMenuItem";

function NavItem({ className, r, item }) {
  return (
    <div className={`${className}`}>
      <a
        className={` h-[72px] item flex items-center justify-center hover:text-mainColor relative overflow-hidden hover:bg-[#fafafa] before:z-0 before:absolute before:bg-mainColor before:h-1 before:-left-full before:top-0 before:w-full hover:before:left-0  px-2 trans`}
        href={r}
      >
        {item}
      </a>
      <div className="absolute w-full left-0  padding-[30px] bg-white flex gap-[40px] megaMenu">
        <div>
          <img className="p-5 megaImg" src={megaMenu} alt="" />
        </div>
        <ul className="min-w-[250px] megaUl">
          <MegaMenuItem
            icon={<FaComment />}
            val="Testimonials"
            r="#testimonials"
          />
          <MegaMenuItem
            icon={<FaUserAlt />}
            val="Team Members"
            r="#teamMembers"
          />

          <MegaMenuItem icon={<FaBuilding />} val="Services" r="#services" />
          <MegaMenuItem
            icon={<BsFillCheckCircleFill />}
            val="Our Skills"
            r="#ourSkills"
          />
          <MegaMenuItem
            icon={<FaClipboard />}
            val="How Its Works"
            r="#howItsWorks"
          />
        </ul>
        <ul className="min-w-[250px] megaUl">
          <MegaMenuItem
            icon={<BsCalendar2DateFill />}
            val="Events"
            r="#events"
          />
          <MegaMenuItem
            icon={<FaServer />}
            val="Pricing Plans"
            r="#pricingPlans"
          />
          <MegaMenuItem
            icon={<FaPlayCircle />}
            val="Top Videos"
            r="#topVideos"
          />
          <MegaMenuItem icon={<FaChartBar />} val="Stats" r="#stats" />
          <MegaMenuItem
            icon={<FaPercent />}
            val="Request A Discount"
            r="#requestADiscount"
          />
        </ul>
      </div>
    </div>
  );
}

export default NavItem;
