import React from "react";
import { FaComment } from "react-icons/fa";

function MegaMenuItem(props) {
  return (
    <div>
      <li className="relative megaMenuItem border-b-[1px] border-[#777]">
        <a
          className="flex items-center gap-3 text-mainColor block font-bold p-[15px] text-xl"
          href={props.r}
        >
          {props.icon}
          {props.val}
        </a>
      </li>
    </div>
  );
}

export default MegaMenuItem;
