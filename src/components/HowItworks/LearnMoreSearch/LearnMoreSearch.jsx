import React from "react";
import "./LearnMoreSearch.scss";
const learnMoreSearch = () => {
  return (
    <section id="learn_search">
      <div className="container">
        <div className="learn_search">
          <div className="learn">
            <div className="learn_text">
              <h2>Learn more</h2>
            </div>
            <div className="learn_buttons">
              <button>About us</button>
              <button>Help</button>
              <button>Trust & Safety</button>
              <button>Community standarts</button>
            </div>
          </div>
          <div className="search">
            <div className="search_text">
              <h2>Search</h2>
            </div>
            <div className="search_buttons">
              <button>Find babysitters</button>
              <button>Find nannies</button>
              <button>Find babysitting jobs</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default learnMoreSearch;
