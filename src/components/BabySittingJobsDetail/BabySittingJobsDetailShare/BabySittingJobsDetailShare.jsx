import React from "react";
import "./BabySittingJobsDetailShare.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLink,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const BabySittersDetailShare = () => {
  return (
    <section id="baby_sitters_share">
      <div className="container">
        <div className="baby_sitters_share">
          <div className="baby_sitters_share_title">
            <h1 style={{ fontWeight: "600" }}>Share this profile</h1>
          </div>
          <div className="baby_sitters_share_icons">
            <div className="icon">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faFacebookMessenger} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <div className="icon">
              {" "}
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faLink} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabySittersDetailShare;
