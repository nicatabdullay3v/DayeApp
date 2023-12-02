import React from "react";
import "./FooterDown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faInstagram,faTiktok,faLinkedin,faPinterest,faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
const FooterDown = () => {
  return (
    <section id="footer_down">
      <div className="container">
        <div className="footer_down">
          <h2>Follow us on</h2>
          <div className="footer_down_icons">
            <div className="icon"><FontAwesomeIcon className="iconn" icon={faFacebookF} /></div>
            <div className="icon"><FontAwesomeIcon className="iconn" icon={faInstagram} /></div>
            <div className="icon"><FontAwesomeIcon className="iconn" icon={faTiktok} /></div>
            <div className="icon"><FontAwesomeIcon className="iconn" icon={faLinkedin} /></div>
            <div className="icon"><FontAwesomeIcon  className="iconn" icon={faPinterest} /></div>
            <div className="icon"><FontAwesomeIcon className="iconn" icon={faYoutube} /></div>
            <div className="icon"><FontAwesomeIcon className="iconn" icon={faMartiniGlass} /></div>
          </div>
          <div className="footer_down_description">
            <p> © Babysits B.V.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterDown;
