import React, { useEffect, useState } from "react";
import {
  fetcBabysitterJobs,
  PatchParents,
} from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import { useDispatch, useSelector } from "react-redux";
import "./editpage.scss";
import axios from "axios";
const EditPage = ({ editID }) => {
  const ParentsData = useSelector(
    (state) => state.babysitters.babysitterswanted
  );
  const currentlySister = ParentsData.find((elem) => elem.id === editID);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetcBabysitterJobs(editID));
  }, [dispatch, editID]);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    description: "",
    about: "",
  });

  useEffect(() => {
    if (currentlySister) {
      setFormData({
        firstName: currentlySister.firstName,
        email: currentlySister.email,
        about: currentlySister.about,
        description: currentlySister.description,
      });
    }
  }, [currentlySister]);

  const handleEdit = () => {
    const updatedData = {
      firstName: formData.firstName,
      email: formData.email,
      about: formData.about,
      description: formData.description,
    };
    axios
      .patch(`http://localhost:3000/babysitterswanted/${editID}`, updatedData)
      .then(dispatch(fetcBabysitterJobs()));
  };

  return (
    <section id="edit_page_parent">
      <div className="container">
        <h1 className="change_size">Edit Parent</h1>
        <div className="sides_edit">
          {currentlySister ? (
            <div className="currently_data">
              <h2>Currently</h2>
              <div className="card_parent_currently">
                <div className="currently_p">
                  <b>Name:</b>
                  <span>{currentlySister.firstName}</span>
                </div>
                <div className="currently_span">
                  <b>Email:</b>
                  <span>{currentlySister.email}</span>
                </div>
                <div className="description_span">
                  <b>Description:</b>
                  <p>{currentlySister.description}</p>
                </div>
                <div className="comments_span">
                  <b>About:</b>
                  <p>{currentlySister.about}</p>
                </div>
              </div>
            </div>
          ) : (
            console.log("not found sister")
          )}
          <div className="change_to">
            <h2>Change to</h2>
            <div className="card_parent">
              <div className="name_input">
                <label htmlFor="name">Name:</label>

                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>

              <div className="email_input">
                <label htmlFor="emal">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="comments_input">
                <label htmlFor="about">About:</label>
                <textarea
                  name="about"
                  id="about"
                  cols="40"
                  rows="5"
                  placeholder="At least 200 characters"
                  value={formData.about}
                  onChange={(e) =>
                    setFormData({ ...formData, about: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <div className="edit_btn">
              <button onClick={handleEdit}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
