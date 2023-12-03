import React from "react";
import "./BabySittersAvailability.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const BabySittersAvailability = () => {
  return (
    <>
      <section id="baby_sitters_availability">
        <h1>Availability</h1>

        <div className="baby_sitters_availability">
          <div className="times_of_day">
            <div style={{ color: "white" }} className="time">
              salam
            </div>
            <div className="time">
              <p>Morning</p>
            </div>
            <div className="time">
              <p>Afternoon</p>
            </div>
            <div className="time">
              <p>Evening</p>
            </div>
            <div className="time">
              <p>Night</p>
            </div>
          </div>
          <div className="days">
            <div className="day Mo">
              <div className="title">Mo</div>
              <div className="morning">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="afternoon">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="evening">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="night">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
            </div>
            <div className="day Tu ">
              <div className="title">Tu</div>
              <div className="morning">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="afternoon">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="evening">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="night">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
            </div>
            <div className="day We">
              <div className="title">We</div>
              <div className="morning">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="afternoon">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="evening">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="night">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
            </div>
            <div className="day Th">
              <div className="title">Th</div>
              <div className="morning">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="afternoon">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="evening">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="night">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
            </div>
            <div className="day Fr">
              <div className="title">Fr</div>
              <div className="morning">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="afternoon">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="evening">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="night">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
            </div>
            <div className="day Sa">
              <div className="title">Sa</div>
              <div className="morning">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="afternoon">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="evening">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="night">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
            </div>
            <div className="day Su">
              <div className="title">Su</div>
              <div className="morning">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="afternoon">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="evening">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
              <div className="night">
                <FontAwesomeIcon
                  style={{ fontSize: "12px", color: "white" }}
                  icon={faCheck}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BabySittersAvailability;
