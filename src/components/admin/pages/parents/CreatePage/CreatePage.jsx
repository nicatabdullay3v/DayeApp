import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { PushParent } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";
import axios from "axios";
import { fetcBabysitterJobs } from "../../../../../redux/Slice/BabySittersSlice/BabySittersSlice";

const CreatePage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    age: 0,
    numberofChildren: 0,
    childrenAge: "",
    description: "",
    references: "",
    activities: "",
  });

  const handleCreate = () => {
    const newObject = {
      firstName: formData.firstName,
      email: formData.email,
      age: formData.age,
      numberofChildren: formData.numberofChildren,
      childrenAge: formData.childrenAge,
      description: formData.description,
      references: formData.references,
      activities: formData.activities,
    };

    axios
      .post(`http://localhost:3000/babysitterswanted/`, newObject)
      .then(dispatch(fetcBabysitterJobs()));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section id="create_page">
      <div className="container">
        <h1 className="change_size">Create Parent</h1>

        <div className="create_sides">
          <div className="right_side_create">
            <div className="create_to">
              <div className="card_parent">
                <div className="name_input">
                  <label htmlFor="firstName">Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Name"
                    value={formData.firstName}
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>

                <div className="age_input">
                  <label htmlFor="age">Age:</label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    placeholder="Age Parent"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>

                <div className="child_input">
                  <label htmlFor="numberofChildren">Child:</label>
                  <input
                    type="number"
                    name="numberofChildren"
                    id="numberofChildren"
                    placeholder="Child"
                    value={formData.numberofChildren}
                    onChange={handleChange}
                  />
                </div>

                <div className="age_input">
                  <label htmlFor="childrenAge">Age: </label>
                  <input
                    type="number"
                    name="childrenAge"
                    id="childrenAge"
                    placeholder="Age Children"
                    value={formData.childrenAge}
                    onChange={handleChange}
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
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="comments_input">
                  <label htmlFor="references">References:</label>
                  <textarea
                    name="references"
                    id="references"
                    cols="40"
                    rows="5"
                    placeholder="Your reference here"
                    value={formData.references}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="comments_input">
                  <label htmlFor="activities">Activities:</label>
                  <textarea
                    name="activities"
                    id="activities"
                    cols="40"
                    rows="5"
                    placeholder="Your activity here"
                    value={formData.activities}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="create_btn">
              <button onClick={handleCreate}>Create</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePage;
