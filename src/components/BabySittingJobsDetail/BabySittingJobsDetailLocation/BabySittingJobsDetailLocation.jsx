import React from "react";
import "./BabySittingJobsDetailLocation.scss"
const BabySittersDetailLocation = () => {
  return (
    <section id="baby_sitters_location">
      <div className="container">
        <div className="baby_sitters_location">
          <div className="baby_sitters_location_text">
            <div className="baby_sitters_location_text_title">
              <h2>Location</h2>
            </div>
            <div className="baby_sitters_location_text_description">
              <p>
                <span>Babysitter in Grand Prairie</span>, Dallas, Texas{" "}
              </p>
            </div>
          </div>
          <div className="baby_sitters_location_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24319.103892286643!2d49.9647335!3d40.367008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1701593785725!5m2!1sen!2saz"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabySittersDetailLocation;
