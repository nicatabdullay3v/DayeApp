import React from "react";
import "./babySittersHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faShareFromSquare,faHeart } from "@fortawesome/free-regular-svg-icons";
const BabySittersHeader = () => {
  return (
    <header>
      <div className="container">
        <div className="baby_sitters_header">
          <div className="header_left">
            <span>Babysits</span>/<span>Babysitter wanted</span>/
            <span>Babysitter Raleigh</span>/<span>Jaida</span>
          </div>

          <div className="header_right">
            <div className="header_right_share">
                <FontAwesomeIcon className="icon" icon={faShareFromSquare}/>
                <span>Share</span>
            </div>
            <div className="header_right_save">
                <FontAwesomeIcon className="icon" icon={faHeart}/>
                <span>Save</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BabySittersHeader;
