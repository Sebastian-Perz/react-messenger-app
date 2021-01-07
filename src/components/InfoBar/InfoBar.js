import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";

import "./InfoBar.css";

const InfoBar = ({ room, users }) => {
  return (
    <div>
      <div className="infoBar">
        <div className="leftInnerContainer">
          <GoPrimitiveDot />
        </div>
        <div className="centerInnerContainer">
          <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
          <a href="/">
            <RiCloseFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
