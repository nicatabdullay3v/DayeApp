import React, {  useEffect } from "react";
import { fetchUserById } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch, useSelector } from "react-redux";
const EditPage = ({ seteditID, editID }) => {

  console.log(editID);

  const babysittersData = useSelector((state) => state.babysitters.babysitters);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById());
  }, []);

  let currentlySister;
  if (babysittersData.find((elem) => elem.id == editID)) {
       currentlySister = elem;
  }

  console.log(currentlySister)
  return (
    <section id="edit_page_parent">
      <div className="container">
        <h1 className="change_size">Edit BabySitters</h1>
        <div className="sides_edit">

          {
            currentlySister ?
              <div className="currently_data">
                <h2>Currently</h2>
                <div className="card_parent_currently">
                  <div className="currently_p">
                    <b>Name:</b>
                    <span>{currentlySister.name}</span>
                  </div>

                  <div className="currently_span">
                    <b>Email:</b>
                    <span>JohnDoe2000@gmail.com</span>
                  </div>

                  <div className="currently_span">
                    <b>Price:</b>
                    <span>Hour {currentlySister.price}$</span>
                  </div>

                  <div className="description_span">
                    <b>Description:</b>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus facere ipsa fugiat. Aspernatur, placeat.
                      Temporibus sed exercitationem voluptatum placeat iure.
                    </p>
                  </div>
                  <div className="comments_span">
                    <b>References:</b>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita unde quas velit eveniet blanditiis.
                    </p>
                  </div>

                  <div className="comments_span">
                    <b>Activities:</b>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita unde quas velit eveniet blanditiis.
                    </p>
                  </div>

                </div>
              </div> : console.log("not found sister")
          }

          <div className="change_to">
            <h2>Change to</h2>
            <div className="card_parent">
              <div className="name_input">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>

              <div className="email_input">
                <label htmlFor="emal">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="price_input">
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Price"
                />
              </div>

              <div className="description_input">
                <label htmlFor="description">Description:</label>
                <textarea
                  name="description"
                  id="description"
                  cols="40"
                  rows="5"
                  placeholder="At least 200 characters"
                ></textarea>
              </div>

              <div className="comments_input">
                <label htmlFor="comments">References:</label>
                <textarea
                  name="comments"
                  id="comments"
                  cols="40"
                  rows="5"
                  placeholder="Your reference here"
                ></textarea>
              </div>

              <div className="comments_input">
                <label htmlFor="comments">Activities:</label>
                <textarea
                  name="comments"
                  id="comments"
                  cols="40"
                  rows="5"
                  placeholder="Your activity here"
                ></textarea>
              </div>

            </div>
            <div className="edit_btn">
              <button>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
