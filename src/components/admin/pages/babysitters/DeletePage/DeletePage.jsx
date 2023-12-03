import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const DeletePage = () => {
  return (
    <section id="delete_page">
      <div className="container">
        <h1 className="change_size">Delete BabySitter</h1>
        <div className="delete_sides">
          <div className="left_side_delete">
            <div
              onClick={() => {
                navigate("/babysittersDetail");
              }}
              className="card"
            >
              <div className="card_image"></div>
              <div className="card_detail">
                <p>Name</p>
                <span>City</span>
              </div>
              <div className="raiting_stars">
                <FontAwesomeIcon icon={faStar} style={{ color: "#c7f75e" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#c7f75e" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#c7f75e" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#c7f75e" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#c7f75e" }} />
              </div>
            </div>
          </div>
          <div className="right_side_delete">
            <div className="delete_form">
              <p>Are You Sure to Delete?</p>
              <div className="input_delete">
                <input type="checkbox" />
                <label htmlFor="delete">Yes I'm Sure!</label>
              </div>
              <div className="text_delete">
                <span>This User will be delete</span>
              </div>
              <div className="delete_button_sure">
                <button>Delete it!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeletePage;
