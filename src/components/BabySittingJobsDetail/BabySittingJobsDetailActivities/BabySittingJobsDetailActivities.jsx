import React from "react";
import "./BabySittingJobsDetailActivities.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const BabySittersDetailActivities = () => {
  return (
    <>
      <section id="activities">
        <div className="container">
          <div className="activities">
            <div className="activities_left">
              <p className="title">
                {" "}
                <span>name</span> provided
              </p>
              <div className="provides">
                <div className="goverment_id prov">
                  <div className="prov_text">
                    <p>Government ID</p>
                  </div>
                  <div className="prov_icon">
                    <FontAwesomeIcon className="icon" icon={faCheck} />
                  </div>
                </div>
                <div className="email prov">
                  <div className="prov_text">
                    <p>Email address</p>
                  </div>
                  <div className="prov_icon">
                    <FontAwesomeIcon className="icon" icon={faCheck} />
                  </div>
                </div>
                <div className="phone prov">
                  <div className="prov_text">
                    <p>Phone number</p>
                  </div>
                  <div className="prov_icon">
                    <FontAwesomeIcon className="icon" icon={faCheck} />
                  </div>
                </div>
                <div className="apple_account prov">
                  <div className="prov_text">
                    <p>Apple account</p>
                  </div>
                  <div className="prov_icon">
                    <FontAwesomeIcon className="icon" icon={faCheck} />
                  </div>
                </div>
                <div className="facebook_account prov">
                  <div className="prov_text">
                    <p>Facebook account</p>
                  </div>
                  <div className="prov_icon">
                    <FontAwesomeIcon className="icon" icon={faCheck} />
                  </div>
                </div>
                <div className="google_account prov">
                  <div className="prov_text">
                    <p>Google account</p>
                  </div>
                  <div className="prov_icon">
                    <FontAwesomeIcon className="icon" icon={faCheck} />
                  </div>
                </div>
              </div>
            </div>
            <div className="activities_right">
              <p className="title"> Activities</p>
              <div className="activite">
                <div className="member prov">
                  <div className="prov_text">
                    <p>Member since</p>
                  </div>
                  <div className="prov_icon">May 2022</div>
                </div>
                <div className="last_activitie prov">
                  <div className="prov_text">
                    <p>Last activity</p>
                  </div>
                  <div className="prov_icon">Yesterday</div>
                </div>
                <div className="answered_messages prov">
                  <div className="prov_text">
                    <p>Answered messages</p>
                  </div>
                  <div className="prov_icon">100%</div>
                </div>
                <div className="average_time prov">
                  <div className="prov_text">
                    <p>Average response time</p>
                  </div>
                  <div className="prov_icon">3 minutes</div>
                </div>
                <div className="bookings prov">
                  <div className="prov_text">
                    <p>Bookings</p>
                  </div>
                  <div className="prov_icon">0</div>
                </div>
                <div className="repeat_bookings prov">
                  <div className="prov_text">
                    <p>Repeat bookings</p>
                  </div>
                  <div className="prov_icon">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BabySittersDetailActivities;
