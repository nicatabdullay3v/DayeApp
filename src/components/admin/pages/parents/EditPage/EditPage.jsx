import React from "react";
import "./editpage.scss";

const EditPage = () => {
  return (
    <section id="edit_page_parent">
      <div className="container">
        <h1 className="change_size">Edit Parent</h1>
        <div className="sides_edit">
          <div className="currently_data">
            <h2>Currently</h2>
            <div className="card_parent_currently">
             <div className="currently_p">
              <b>Name:</b>
             <span>John Doe</span>
             </div>
             <div className="currently_span">
              <b>Email:</b>
             <span>JohnDoe2000@gmail.com</span>
             </div>
             <div className="description_span">
              <b>Description:</b>
             <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Repellendus facere ipsa fugiat. Aspernatur, placeat.
                Temporibus sed exercitationem voluptatum placeat iure.
              </p>
             </div>
             <div className="comments_span">
              <b>Comments:</b>
             <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Expedita unde quas velit eveniet blanditiis.
              </p>
             </div>
            </div>
          </div>
          <div className="change_to">
            <h2>Change to</h2>
            <div className="card_parent">
              <div className="name_input">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>

              <div className="email_input">
                <label htmlFor="emal">Email:</label>
                <input type="email" name="email" id="email" placeholder="Email"/>
              </div>

              <div className="description_input">
                <label htmlFor="description">Description:</label>
                <textarea
                  name="description"
                  id="description"
                  cols="35"
                  rows="5"
                  placeholder="At least 200 characters"
                ></textarea>
              </div>

              <div className="comments_input">
                <label htmlFor="comments">Comments:</label>
                <textarea
                  name="comments"
                  id="comments"
                  cols="35"
                  rows="5"
                  placeholder="Your commit here"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
