import React from "react";
import "./HowJoin.scss";
const HowJoin = () => {
  return (
    <>
      <section id="how_join">
        <div className="container">
          <div className="how_join">
            <div className="how_join_title">
              <h2>Ready to join?</h2>
            </div>
            <div className="how_join_img">
              <img
                src="./../../../../src/assets/images/sign-language-hello-animation.gif"
                alt=""
              />
            </div>
            <div className="how_join_button">
              <button>Sign me up!</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowJoin;
